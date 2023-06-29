import { Link } from "react-router-dom"
import { UserContext } from "./UserContext"
import { useContext } from "react"

function Videogames({videogames, setVideogames}) {
    const {user} = useContext(UserContext)
    function handleDeleteClick(id) {
        fetch(`videogames/${id}#destroy`, 
            {method: "DELETE"
            })
            .then((r) => r.json()).then(handleDeleteVideogame(id))
    };
    
    function handleDeleteVideogame (id) {
        setVideogames(oldVideogames => {
            return oldVideogames.filter(videogame => videogame.id !== id)
        })
    }

    function handleButtonRender (videogame) {
        if (user && user.username === "samity") {
            return (
                <button onClick={()=>handleDeleteClick(videogame.id)}>Delete Videogame and its Reviews</button>
            )
        }
    }

    const renderVideogames = videogames.map((videogame) => (
        <div className="card" key={videogame.name}>
            <Link to={`${videogame.id}`}><h3>{videogame.name}</h3></Link>
            <img src={videogame.image_url} alt={videogame.name}/>
            {handleButtonRender(videogame)}
        </div>
    ))
    
    return(
        <div>
            {renderVideogames}
        </div>
    )
}

export default Videogames
    
    
    