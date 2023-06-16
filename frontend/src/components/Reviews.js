
import {React, useState} from "react";

function Reviews ({reviews, setReviews}) {

    const [sortReviews, setSortReviews] = useState("");
    
    const DropDown = () => (
        <select onChange={handleChange}>
          <option default disabled>sorting method..</option>
          <option value="gametitle">Game Title</option>
          <option value="lowtohigh">Rating: Low to High</option>
          <option value="hightolow">Rating: High to Low</option>
          <option value="user">User</option>
        </select>
    );
    
    function handleChange (event) {
        setSortReviews(event.target.value);
    };

    function handleDeleteClick(id) {
        fetch(`reviews/${id}#destroy`, 
            {method: "DELETE"
            })
            .then((r) => r.json()).then(deleteById(id))
    };

    const sortedReviews = reviews.sort((a,b) => {
        if (sortReviews === "lowtohigh") {
            return a.rating - b.rating
        } else if (sortReviews === "hightolow") {
            return b.rating - a.rating 
        } else if (sortReviews === "user") {
            return a.user.username.localeCompare(b.user.username)
        } else if (sortReviews === "gametitle") {
            return a.videogame.name.localeCompare(b.videogame.name)   
        } else {return null}
    })


    const deleteById = id => {
        setReviews(oldReviews => {
          return oldReviews.filter(review => review.id !== id)
        })
      }
    
    
    
    const RenderReviews = () => {
            return (    
            reviews.map((review) => (
                <div>
                    <h2>{review.videogame.name}</h2>
                    <img src={review.videogame.image_url} alt={review.videogame.name}/>
                    <h2>{review.title}</h2>
                    <h2>Rating: {review.rating}/10</h2>
                    <h3>reviewed by: {review.user.username}</h3>
                    <p>{review.body}</p>
                    <button onClick={ () => handleDeleteClick(review.id)}>delete review</button>
                </div>
            ))
        )}


    return (
        <div>
            <h1>Reviews</h1>
            <DropDown/>
            <RenderReviews/>
        </div>
    )

}

export default Reviews