import { useState } from "react";

const Home = () => {

    const [blogs, setBlogs] = useState([
        { title: 'Running Man', body: 'Lorem ....', author: 'Nine Dev', id: '1' },
        { title: 'Running Women', body: 'Lorem ....', author: 'Nine Dev', id: '2' },
        { title: 'Hello world', body: 'Lorem ....', author: 'Nine Dev', id: '3' },
    ])

    return (
        <div>
            <h1>Home Page</h1>
            {
                blogs.length && blogs.map(item => (
                    <div key={item.id} className="blog-preview">
                        <h2>{item.title}</h2>
                        <div>{item.body}</div>
                    </div>
                ))
            }
        </div>
    )
}

export default Home;