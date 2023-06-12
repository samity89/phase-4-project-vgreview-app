
import {React, useState} from "react";

function Reviews ({reviews, setReviews}) {

    const [sortReviews, setSortReviews] = useState("");
    
    const DropDown = () => (
        <select onChange={handleChange}>
          <option selected disabled>sorting method..</option>
          <option value="gametitle">Game Title</option>
          <option value="lowtohigh">Rating: Low to High</option>
          <option value="hightolow">Rating: High to Low</option>
          <option value="user">User</option>
        </select>
    );
    
    function handleChange (event) {
        setSortReviews(event.target.value);
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
        }
    })

    

        // if (sortReviews === "lowtohigh") {
        //     reviews.sort((a,b) => a.rating - b.rating)
        // } else if (sortReviews ==="hightolow") {
        //     reviews.sort((a,b) => b.rating - a.rating)
        // } else if (sortReviews ==="user") {
        //     reviews.sort((a,b) => a.user.username.localeCompare(b.user.username))
        // } else if (sortReviews ==="gametitle") {
        //     reviews.sort((a,b) => a.videogame.name.localeCompare(b.videogame.name))
        // }
        // setReviews((reviews) => reviews)}


    
    
    
    const RenderReviews = () => {
          return (    
            sortedReviews.map((review) => (
                <div>
                    <h2>{review.videogame.name}</h2>
                    <img src={review.videogame.image_url} alt={review.videogame.name}/>
                    <h3>reviewed by: {review.user.username}</h3>
                    <h2>{review.title}</h2>
                    <h2>Rating: {review.rating}/10</h2>
                    <p>{review.body}</p>
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