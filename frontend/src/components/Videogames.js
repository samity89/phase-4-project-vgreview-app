function Videogames({videogames}) {
    const renderVideogames = videogames.map((videogame) => (
        <div className="card" key={videogame.name}>
            <h3>{videogame.name}</h3>
            <img src={videogame.image_url} alt={videogame.name}/>
         </div>        
    ))

    return(
        <div>
            {renderVideogames}
        </div>
    )
}

export default Videogames