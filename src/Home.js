import { useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Running Man', body: 'Lorem ....', author: 'mario', id: '1' },
        { title: 'Running Women', body: 'Lorem ....', author: 'mario', id: '2' },
        { title: 'Hello world', body: 'Lorem ....', author: 'yoshi', id: '3' },
        { title: 'Hello Develop', body: 'Lorem ....', author: 'yoshi', id: '4' },
    ])

    const handleDeleteBlog = (id, title) => {
        console.log(title);
        setBlogs(blogs.filter(item => item.id !== id));
    }

    const [name, setName] = useState(true);

    return (
        <div>
            {
                name && 
                <BlogList handleDeleteBlog={handleDeleteBlog} blogs={blogs} author="Nine Dev Blog"/>
            }
            <button onClick={() => setName(false)}>Hide BlockList</button>
        </div>
    )
}

export default Home;