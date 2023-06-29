
import { useEffect, useState } from "react"
import { useLocation } from "react-router-dom"

function Review () {

    const location = useLocation()
    const [review, setReview] = useState({
        title: "",
        rating: "",
        body: "",
        user: {
          username: ""
        }
    })
    
    useEffect(() => {
        fetch(`${location.pathname}`)
        .then((response) => response.json())
        .then((response) => setReview(response))
    },[location.pathname, setReview])  

    
    function renderReview (review) {
        return (
            <div>
                <h2>{review.title}</h2>
                <h2>Rating: {review.rating}/10</h2>
                <h4>reviewed by: {review.user.username}</h4>
                <h4>{review.body}</h4>
            </div>
        )
    }

    return (
        <div>
            {renderReview(review)}
        </div>
    )
}

export default Review