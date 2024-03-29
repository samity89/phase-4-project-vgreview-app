import { useContext, useState } from "react"
import { UserContext } from "./UserContext"

function VGForm ({
    navigate,
    videogames,
    setVideogames}) 
{
    const {user} = useContext(UserContext)
    const [videogameForm, setVideogameForm] = useState({
        name: "",
        developer: "",
        release_date: "",
        genre: "",
        image_url: "",
        platform: "",
    })
    const [errors, setErrors] = useState([])

    const handleChange = e => {
        const name = e.target.name;
        const value = e.target.value;
        setVideogameForm({...videogameForm, [name]: value})
    }
    
    
    async function handleGameFormSubmit (event) {
        event.preventDefault()
        const response = await fetch(`videogames/#create`, {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify(
                {
                    "name": videogameForm.name,
                    "developer": videogameForm.developer,
                    "release_date": videogameForm.release_date,
                    "genre": videogameForm.genre,
                    "image_url": videogameForm.image_url,
                    "platform": videogameForm.platform
                })
            })
            const data = await response.json()
            if (response.ok) { 
                handleAddGame(data)
                navigate("/videogames")
            } else {
                setErrors(data.errors)
            }
        }
    
      
        function handleAddGame(newGame) {
            setVideogames([...videogames, newGame])
        }

    if (user && user.username === "samity") {        
        return (
            <div>
            <form onSubmit={handleGameFormSubmit}>
                <h3>submit a new videogame for review</h3>
                Game Title<input 
                    name="name"
                    onChange={handleChange}/><br/>
                Developer<input 
                    name="developer"
                    onChange={handleChange}/><br/>
                Release Date<input 
                    type="date"
                    name="release_date" 
                    onChange={handleChange}/><br/>
                Genre<input 
                    name="genre"
                    onChange={handleChange}/><br/>
                Image URL<input
                    name="image_url" 
                    onChange={handleChange}/><br/>
                Platform<input 
                    name="platform"
                    onChange={handleChange}/><br/>
                {errors.length > 0 && (
                    <ul style={{ color: "red" }}>
                        {errors.map((error) => (
                            <li key={error}>{error}</li>
                        ))}
                    </ul>
                 )}
                <button type="submit">Submit</button>
                <hr></hr>
            </form>
        </div>
    )
    } else {
        return null
    }
    
}

export default VGForm