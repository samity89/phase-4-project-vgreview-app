
import {React, useState, useContext} from "react";
import { Link } from "react-router-dom";
import { UserContext } from "./UserContext";

function Reviews ({reviews, setReviews}) {

    const [sortReviews, setSortReviews] = useState("");
    const { user } = useContext(UserContext)
    
    function handleDeleteClick(id) {
        fetch(`reviews/${id}#destroy`, 
            {method: "DELETE"
            })
            .then((r) => r.json()).then(handleDeleteReview(id))
    };

    
    const DropDown = () => (
        <select onChange={handleChange}>
          <option default>sorting method..</option>
          <option value="user">User</option>
          <option value="gametitle">Game Title</option>
          <option value="lowtohigh">Rating: Low to High</option>
          <option value="hightolow">Rating: High to Low</option>
        </select>
    );
    
    
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
    
    function handleChange (event) {
        setSortReviews(event.target.value);
    };
    
    function handleDeleteReview (id) {
        setReviews(oldReviews => {
            return oldReviews.filter(review => review.id !== id)
        })
    }
    
    function handleEdit(id, editingValue) {
        fetch(`reviews/${id}#update`,
        {method: "PATCH",
        headers: {"Content-Type": "application/json,"},
        body: JSON.stringify({
            body: editingValue
        })
        })
        .then((r) => r.json()).then((r) => handleUpdateReview(r))
    }

    function handleUpdateReview(updatedReview) {
        const updatedReviews = reviews.map((review) => {
          if (review.id === updatedReview.id) {
            return updatedReview;
          } else {
            return review;
          }
        });
        setReviews(updatedReviews);
    }
    
    const ReviewEdit = ({ value, review }) => {
        const [editingValue, setEditingValue] = useState(value);
      
        function onChange (event) {
            setEditingValue(event.target.value);
        };
      
        const onKeyDown = (event) => {
          if (event.key === "Enter" || event.key === "Escape") {
            event.target.blur();
          }
        };
      
        const onBlur = () => {
            handleEdit(review.id, editingValue)
        };
      
        
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
                onClick={ () => handleDeleteClick(review.id)}>
                delete review
            </button>
            </div>
            ); } else {
            return<p>{review.body}</p>
          }
    };
    
    const RenderReviews = () => {   
        return (    
            reviews.map((review) => (
                <div key={review.id}>
                    <h2>{review.videogame.name}</h2>
                    <img src={review.videogame.image_url} alt={review.videogame.name}/>
                    <Link to={`${review.id}`}><h2>{review.title}</h2></Link>
                    <h2>Rating: {review.rating}/10</h2>
                    <h3>reviewed by: {review.user.username}</h3>
                    <ReviewEdit value={review.body} review={review}/><br></br>
                    <hr></hr>
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