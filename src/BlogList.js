const BlogList = (props) => {

    const { blogs, author } = props;

    return (
        <div className="blog-list">
            {
                blogs.length && blogs.map(item => (
                    <div key={item.id} className="blog-preview">
                        <h2>{item.title}</h2>
                        <div>{item.body}</div>
                        <div>{item.id}</div>
                    </div>
                ))
            }

            <div>{author}</div>
        </div>
    )
}

export default BlogList;