import { useEffect, useState, useContext } from "react"
import { useLocation } from "react-router-dom"
import { UserContext } from "./UserContext"


function Videogame ({videogames, setVideogames}) {
    
    const location = useLocation()
    const { user } = useContext(UserContext)
    const [isEditting, setIsEditting] = useState(false)
    const [game, setGame] = useState({
        name: "",
        developer: "",
        release_date: "",
        genre: "",
        image_url: "",
        platform: "",
        reviews: []
    })
    const [editGameForm, setEditGameForm] = useState({
        name: "",
        developer: "",
        release_date: "",
        genre: "",
        image_url: "",
        platform: "",        
    })
    
    useEffect(() => {
        fetch(`${location.pathname}`)
        .then((r) => r.json())
        .then((r) => {
            setGame(r)
            setEditGameForm({
                name: r.name,
                developer: r.developer,
                release_date: r.release_date,
                genre: r.genre,
                image_url: r.image_url,
                platform: r.platform,
            })
        })
    },[location.pathname, setGame, setEditGameForm])
    
    function toggleEdit () {
        setIsEditting(!isEditting)
    }
    
    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setEditGameForm({...editGameForm, [name]: value})
    }
    
    function handleEditGameFormSubmit (e) {
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

    const renderEditButton = (user && user.username === "samity") ? <button onClick={toggleEdit}>edit form</button> : null

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
        
        const renderGameReviews = (reviews) => {
            return (
                reviews.map((review) => (
                    <div key={review.id}>
                        <h2>{review.title}</h2>
                        <h2>Rating: {review.rating}/10</h2>
                        <h3>Reviewed by: {review.user.username}</h3>
                        <p>{review.body}</p><br></br>
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
        
             
    
    