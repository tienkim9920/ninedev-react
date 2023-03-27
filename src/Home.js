import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Running Man', body: 'Lorem ....', author: 'Nine Dev', id: '1' },
        { title: 'Running Women', body: 'Lorem ....', author: 'Nine Dev', id: '2' },
        { title: 'Hello world', body: 'Lorem ....', author: 'Nine Dev', id: '3' },
    ])

    const [author, setAuthor] = useState("Nine Dev");

    return (
        <div>
            <BlogList blogs={blogs} author={author}/>
        </div>
    )
}

export default Home;