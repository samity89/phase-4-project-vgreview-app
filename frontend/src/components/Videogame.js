function Videogame (videogame) {

    function renderGameReviews (videogame) {
        videogame.reviews.map((review) => (
            <div key={review.id}>
                <img src={review.videogame.image_url} alt={review.videogame.name}/>
                <h2>{review.title}</h2>
                <h2>Rating: {review.rating}/10</h2>
                <h3>reviewed by: {review.user.username}</h3>
                <p>{review.body}</p><br></br>
                <hr></hr>
            </div>
    ))}
    
    function renderVideogame (videogame) {
        return (
            <div>
                <h2>{videogame.name}</h2>
                <img src={videogame.image_url} alt={videogame.name}/>
                <h3>{videogame.developer}</h3>
                <h3>{videogame.release_date}</h3>
                <h3>{videogame.genre}</h3>
            </div>
        )
    }
}

export default Videogame