import { useState } from "react";

const Home = () => {

    const [name, setName] = useState('Nguyen Van A');
    const [age, setAge] = useState(25);
    const [address, setAddress] = useState('');

    const handleClickEvent = () => {
        setName('Nine Dev');
        setAge(30);
        setAddress('TP. HCM');
        console.log("Nine Dev")
    }

    return (
        <div>
            <h1>Home Page</h1>
            <div>{name} - {age} old - {address}</div>
            <button onClick={handleClickEvent}>Click Event</button>
        </div>
    )
}

export default Home;