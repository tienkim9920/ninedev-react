import { useMemo, useState } from "react";
import { Link } from "react-router-dom";

const BlogList = (props) => {
  const { blogs, author } = props;

  const [txtSearch, setTxtSearch] = useState('');
  
  const searchValueBlog = useMemo(() => {
    if (!txtSearch) return blogs;
    
    return blogs.filter(
      item => item.title.toUpperCase().indexOf(txtSearch.toUpperCase()) !== -1
    );
  }, [txtSearch])

  return (
    <div className="blog-list">
      <div className="d-flex justify-content-between align-items">
        <h2>{author}</h2>
        <input
          placeholder="Enter Search Blog"
          style={{ width: '300px' }}
          type="text"
          value={txtSearch || ''}
          onChange={(e) => setTxtSearch(e.target.value)}
        />
      </div>
      {searchValueBlog.length &&
        searchValueBlog.map((item) => (
          <div className="blog-preview" key={item.id}>
            <Link
              to={`/blog/${item.id}`}
            >
              <h2>{item.title}</h2>
              <div className="line-clamp">{item.body}</div>
            </Link>
          </div>
        ))}
    </div>
  );
};

export default BlogList;
