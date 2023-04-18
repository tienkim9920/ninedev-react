const BlogList = (props) => {

    const { blogs, author, handleDeleteBlog } = props;

    const onDelete = (id, title) => {
        handleDeleteBlog(id, title);
    }

    return (
        <div className="blog-list">
            <h2>{author}</h2>
            {
                blogs.length && blogs.map(item => (
                    <div key={item.id} className="blog-preview">
                        <h2>{item.title}</h2>
                        <div className="line-clamp">{item.body}</div>
                        <button onClick={() => onDelete(item.id, item.title)}>Delete</button>
                    </div>
                ))
            }
        </div>
    )
}

export default BlogList;