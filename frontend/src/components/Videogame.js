import { useState, useContext } from "react"
import { useParams } from "react-router-dom"
import { UserContext } from "./UserContext"


function Videogame ({videogames, setVideogames}) {
    const {id} = useParams()
    const { user } = useContext(UserContext)
    const displayedGame = videogames.filter(videogame => videogame.id === parseInt(id))[0]
    const [game, setGame] = useState({
        id: displayedGame.id,
        name: displayedGame.name,
        developer: displayedGame.developer,
        release_date: displayedGame.release_date,
        genre: displayedGame.genre,
        image_url: displayedGame.image_url,
        platform: displayedGame.platform,
        reviews: displayedGame.reviews
    })
    const [editGameForm, setEditGameForm] = useState({
        name: displayedGame.name,
        developer: displayedGame.developer,
        release_date: displayedGame.release_date,
        genre: displayedGame.genre,
        image_url: displayedGame.image_url,
        platform: displayedGame.platform,       
    })
    
    const [isEditting, setIsEditting] = useState(false)
    const toggleEdit = () => setIsEditting(!isEditting)
    const renderEditButton = (user && user.username === "samity") ? <button onClick={toggleEdit}>edit form</button> : null
    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setEditGameForm({...editGameForm, [name]: value})
    }
    
    const handleEditGameFormSubmit = (e) => {
        e.preventDefault()
        fetch(`${game.id}#update`, {
          method: "PATCH",
          headers: {"Content-Type": "application/json"},
          body: JSON.stringify(
            {
              "id": game.id,
              "name": editGameForm.name,
              "developer": editGameForm.developer,
              "release_date": editGameForm.release_date,
              "genre": editGameForm.genre,
              "image_url": editGameForm.image_url,
              "platform": editGameForm.platform
            }
          )
        })
        .then((r) => r.json())
        .then((r) => handleUpdateGame(r))
        setIsEditting(!isEditting)
    }
    

    function handleUpdateGame(updatedGame) {
        const updatedVideogames = videogames.map((videogame) => {
    
            if (videogame.id === updatedGame.id) {
                return updatedGame;
            } else {
                return videogame;
            }
        });
        setVideogames(updatedVideogames);
        setGame(updatedGame)
        setEditGameForm({
          name: updatedGame.name,
          developer: updatedGame.developer,
          release_date: updatedGame.release_date,
          genre: updatedGame.genre,
          image_url: updatedGame.image_url,
          platform: updatedGame.platform,
        })
    }


    function renderVideogame (game) {
        function editForm () {
            if (user && user.username === "samity") {
                return (
                <div>
                    <form onSubmit={handleEditGameFormSubmit}>
                        <label>Game Title</label>
                        <input 
                            name="name"
                            type="text" 
                            onChange={handleChange} 
                            value={editGameForm.name}/><br/>
                        <label>Developer</label>
                        <input
                            name="developer" 
                            onChange={handleChange} 
                            value={editGameForm.developer}/><br/>
                        <label>Release Date</label>
                        <input
                            name="release_date" 
                            type="date" 
                            onChange={handleChange} 
                            value={editGameForm.release_date}/><br/>
                        <label>Genre</label>
                        <input
                            name="genre"
                            type="text" 
                            onChange={handleChange} 
                            value={editGameForm.genre}/><br/>
                        <label>Image URL</label>
                        <input
                            name="image_url"
                            type="text" 
                            onChange={handleChange} 
                            value={editGameForm.image_url}/><br/>
                        <label>Platform</label>
                        <input 
                            name="platform"
                            type="text"
                            onChange={handleChange} 
                            value={editGameForm.platform}/><br/>
                        <button type="submit">Submit</button>
                    </form>
                </div>
            )} else {return null}
        }
        
        
        
    function handleDeleteReviewClick(id) {
        fetch(`../reviews/${id}#destroy`, 
        {method: "DELETE"}
        )
        .then((r) => r.json()).then(handleDeleteReview(id))
    };
        
    function handleDeleteReview (id) {
        setGame((game) => ({
            ...game,
            reviews: game.reviews.filter(review => review.id !== id)
        }))
        console.log(game)
        handleGameReviewDeletion(game)
    }
        
    function handleGameReviewDeletion (game) {
        const updatedVideogames = videogames.map((videogame) => {
            if (videogame.id === game.id) {
                console.log(game)
                return game
            } else {
                return videogame
            }
            })
        setVideogames((videogames) => updatedVideogames)
        // setCount((count) => count + 1) use callback syntax
    }

    function handleUpdateReview(updatedReview) {
        fetch(`../reviews/${updatedReview.id}#update`, {
            method: "PATCH",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
              {
                "body": updatedReview.body
              }
            )
          })
        .then((r) => r.json())
        .then((r) => console.log(r))
    };


    function handleEditReview(id, editingValue) {
        let updatedReview = game.reviews.filter(review => review.id === id)
        updatedReview[0].body = editingValue
        handleUpdateReview(updatedReview[0])
    }

    const ReviewEdit = ({ value, review }) => {
        const [editingValue, setEditingValue] = useState(value);
        const onChange = (event) => setEditingValue(event.target.value)
        const onKeyDown = (event) => {
          if (event.key === "Enter" || event.key === "Escape") {
            event.target.blur();
          }
        };
        const onBlur = () => handleEditReview(review.id, editingValue);
      
        if (user && user.id === review.user.id) {
            return (
          <div>
            <textarea
                rows={1}
                aria-label="Field name"
                value={editingValue}
                onBlur={onBlur}
                onChange={onChange}
                onKeyDown={onKeyDown}
            /><br></br>
            <button 
                onClick={ () => handleDeleteReviewClick(review.id)}>
                delete review
            </button>
            </div>
            ); } else {
            return<p>{review.body}</p>
          }
        };
      
      
        const renderGameReviews = (reviews) => {
            return (
                reviews.map((review) => (
                    <div key={review.id}>
                        <h2>{review.title}</h2>
                        <h2>Rating: {review.rating}/10</h2>
                        <h3>Reviewed by: {review.user.username}</h3>
                        <ReviewEdit review={review} value={review.body}/>
                        <hr></hr>
                    </div>
                ))
            )
        }
        
        return (
            !isEditting ? <div>
                <h2>{game.name}</h2>
                <img src={game.image_url} alt={game.name}/>
                <h3>{game.developer}</h3>
                <h3>{game.release_date}</h3>
                <h3>{game.genre}</h3>
                <h3>{game.platform}</h3>
                {renderEditButton}
                <hr></hr>
                {renderGameReviews(game.reviews)}
            </div> :
                <div>
                    <button onClick={toggleEdit}>stop editting</button>
                    {editForm()}
                </div>
        )
    }


    return (
        <div>
            {renderVideogame(game)}
        </div>
    )
}

export default Videogame
        
             
    
    