function VGForm ({
    handleGameFormSubmit,
    handleVGNameChange,
    handleVGDeveloperChange,
    handleVGReleaseDateChange,
    handleVGGenreChange,
    handleVGImageURLChange,
    handleVGPlatformChange,
    navigate
}) {
    
    function handleOnClick() {
        navigate("/videogames")
    }

    return (
        <div>
            <form onSubmit={handleGameFormSubmit}>
                <h3>submit a new videogame for review</h3>
                Game Title<input onChange={handleVGNameChange}/><br/>
                Developer<input onChange={handleVGDeveloperChange}/><br/>
                Release Date<input type="date" onChange={handleVGReleaseDateChange}/><br/>
                Genre<input onChange={handleVGGenreChange}/><br/>
                Image URL<input onChange={handleVGImageURLChange}/><br/>
                Platform<input onChange={handleVGPlatformChange}/><br/>
                <button type="submit" onClick={handleOnClick}>Submit</button>
            </form>
        </div>
    )

}

export default VGForm