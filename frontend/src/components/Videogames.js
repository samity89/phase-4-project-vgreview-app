function Videogames({videogames, setVideogames}) {
    
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

    function handleGameNavigate (id) {

    }
    
    const renderVideogames = videogames.map((videogame) => (
        <div className="card" key={videogame.name}>
            <h3 onClick={handleGameNavigate()}>{videogame.name}</h3>
            <img src={videogame.image_url} alt={videogame.name}/>
            <button onClick={()=>handleDeleteClick(videogame.id)}>Delete Videogame and its Reviews</button>
         </div>        
    ))
    
    return(
        <div>
            {renderVideogames}
        </div>
    )
}

export default Videogames