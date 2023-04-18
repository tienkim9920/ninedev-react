import { useEffect, useRef, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([]);

    const handleDeleteBlog = (id) => {
        setBlogs(blogs.filter(item => item.id !== id));
    }

    useEffect(() => {
        (async () => {
            const res = await fetch('http://localhost:8000/blogs');
            const { data } = await res.json();
            if (data?.length > 0) {
                setBlogs(data);
            }
        })();
    }, [])

    return (
        <div>
            {
                blogs.length && 
                <BlogList handleDeleteBlog={handleDeleteBlog} blogs={blogs} author="Nine Dev Blog"/>
            }
        </div>
    )
}

export default Home;