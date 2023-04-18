import { useEffect, useRef, useState } from "react";
import BlogList from "./BlogList";

const Home = () => {

    const [blogs, setBlogs] = useState([]);
    const [isLoading, setIsLoading] = useState(false);

    const handleDeleteBlog = (id) => {
        setBlogs(blogs.filter(item => item.id !== id));
    }

    useEffect(() => {
        (async () => {
            setIsLoading(true);
            const res = await fetch('http://localhost:8000/blogs');
            const { data } = await res.json();
            if (data?.length > 0) {
                setBlogs(data);
                setIsLoading(false);
            }
        })();
    }, [])

    return (
        <div>
            {isLoading && <div>Please waiting for minutes</div>}
            {
                blogs.length > 0 && 
                <BlogList handleDeleteBlog={handleDeleteBlog} blogs={blogs} author="Nine Dev Blog"/>
            }
        </div>
    )
}

export default Home;