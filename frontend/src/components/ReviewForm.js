function ReviewForm ({
    videogames,
    handleFormSubmit,
    handleTitleChange,
    handleGameChange,
    handleRatingChange,
    handleBodyChange,
    navigate, 
}) {

    const renderGameTitles = videogames.map((videogame) => (
        <option key={videogame.name} value={videogame.id}>{videogame.name}</option>
    ))

    function handleOnClick() {
        navigate("/reviews")
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
                <select onChange={handleGameChange}>
                    <option default value="gametitle">Game Title</option>
                    {renderGameTitles}
                </select>
                <select onChange={handleRatingChange}>
                    <option default value="rating">Rating</option>
                    {renderRatingOptions}
                </select><br></br>
                Review Title<input onChange={handleTitleChange}/><br/>
                <textarea onChange={handleBodyChange}/><br></br>
                <button type="submit" onClick={handleOnClick}>Submit</button>
            </form>
        </div>
    )

}

export default ReviewForm