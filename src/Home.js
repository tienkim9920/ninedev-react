const Home = () => {

    const handleClickEvent = () => {
        console.log("Nine Dev")
    }

    const handleClickEvents = (value) => {
        console.log(value);
    }

    return (
        <div>
            <h1>Home Page</h1>
            <button onClick={handleClickEvent}>Click Event</button>
            <button onClick={() => handleClickEvents("Click Events")}>Click Events</button>
        </div>
    )
}

export default Home;