import { UserContext } from "./UserContext"
import { useContext, useState} from "react"

function ReviewForm ({
    videogames,
    setVideogames, 
    navigate,
    setReviews,
    reviews 
}) {
    const {user} = useContext(UserContext)
    const renderGameTitles = videogames.map((videogame) => (
        <option key={videogame.name} value={videogame.id}>{videogame.name}</option>
    ))
    const [formData, setFormData] = useState({
        title: "",
        user_id: null,
        videogame_id: null,
        rating: "",
        body: "",
    });

    function handleFormSubmit (event) {
        event.preventDefault()
        fetch(`reviews/#create`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "title": formData.title,
                "user_id": user.id,
                "videogame_id": formData.videogame_id,
                "rating": formData.rating,
                "body": formData.body,
            })
        })
        .then((response) => response.json())
        .then((newReview) => handleAddReview(newReview))
    }
    
    const handleAddReview = (newReview) => {
        const updatedVideogames = videogames.map((videogame) => {
            if (videogame.id === newReview.videogame_id) {
                videogame.reviews.push(newReview)
                return videogame
            } else {
                return videogame
            }
        })
        setVideogames(updatedVideogames)
        navigate(`/videogames/${formData.videogame_id}`)
    }

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setFormData({...formData, [name]: value})
    }

    
    const ratings = [
        {
            "id": 1,
            "value": 1
        },
        {
            "id": 2,
            "value": 2
        },
        {
            "id": 3,
            "value": 3
        },
        {
            "id": 4,
            "value": 4
        },
        {
            "id": 5,
            "value": 5
        },
        {
            "id": 6,
            "value": 6
        },
        {
            "id": 7,
            "value": 7
        },
        {
            "id": 8,
            "value": 8
        },
        {
            "id": 9,
            "value": 9
        },
        {
            "id": 10,
            "value": 10
        },
    ]
    
    const renderRatingOptions = ratings.map((int) => {
        return <option key={int.id} value={int.value}>{int.value}</option>
    })


    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <h3>submit a new review</h3>
                <select onChange={handleChange} name="videogame_id">
                    <option 
                    default value="gametitle">
                    Game Title</option>
                    {renderGameTitles}
                </select>
                <select onChange={handleChange} name="rating">
                    <option 
                    default value="rating">
                    Rating</option>
                    {renderRatingOptions}
                </select><br></br>
                Review Title
                <input type="text"
                    name="title"
                    onChange={handleChange}/><br/>
                <textarea 
                    type="text"
                    name="body"
                    onChange={handleChange}/><br></br>
                <button type="submit">Submit</button>
            </form>
        </div>
    )

}

export default ReviewForm