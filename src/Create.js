import { useState } from "react";
import BlogList from "./BlogList";

const Create = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Running Man 001', body: 'Lorem ....', author: 'Nine Dev', id: '1' },
        { title: 'Running Women 001', body: 'Lorem ....', author: 'Nine Dev', id: '2' },
        { title: 'Hello world 001', body: 'Lorem ....', author: 'Nine Dev', id: '3' },
    ])

    const [author, setAuthor] = useState("Nine Dev");

    return (
        <div>
            <BlogList blogs={blogs} author={author}/>
        </div>
    )
}

export default Create;