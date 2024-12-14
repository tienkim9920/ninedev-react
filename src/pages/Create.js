import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createBlog } from "../store/blog/blogAction";

const Create = () => {
    const [blog, setBlog] = useState({});
    const history = useNavigate();

    const dispatch = useDispatch();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!blog.title || !blog.body || !blog.author) return;

        (async () => {
            const body = {id: Math.random(), ...blog};
            const res = await fetch('https://ninedev-api.vercel.app/blogs', {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(body)
            })
            const { data, status } = await res.json();
            if (status) {
                dispatch(createBlog(data));
                history('/');
            }
        })();
    }

    return (
        <div className="create">
            <h1>Add New Blog</h1>
            <form onSubmit={handleSubmit}>
                <label>Title</label>
                <input type="text" value={blog.title || ''} onChange={(e) => setBlog({...blog, ['title']: e.target.value})} />
                <label>Body</label>
                <textarea type="text" value={blog.body || ''} onChange={(e) => setBlog({...blog, ['body']: e.target.value})}></textarea>
                <label>Author</label>
                <select value={blog.author || ''} onChange={(e) => setBlog({...blog, ['author']: e.target.value})}>
                    <option value=''>Choose Author</option>
                    <option value="mario">Mario</option>
                    <option value="yoshi">Yoshi</option>
                </select>
                <button disabled={!blog.title || !blog.body || !blog.author}>Add Blog</button>
            </form>
        </div>
    )
}

export default Create;