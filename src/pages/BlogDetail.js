import { useNavigate, useParams } from "react-router-dom";
import useFetch from "../hooks/useFetch";
import { useDispatch } from "react-redux";
import { deleteBlog } from "../store/blog/blogAction";
import Button from "../components/Button";

const BlogDetail = () => {
  const { id } = useParams();
  const history = useNavigate();
  const {
    data: blog,
    isLoading,
    isError,
  } = useFetch(`https://ninedev-api.vercel.app/blogs/${id}`, id);

  const dispatch = useDispatch();

  const handleDelete = () => {
    (async () => {
      const res = await fetch(`https://ninedev-api.vercel.app/blogs/${id}`, {
          method: 'DELETE'
        })
      const { status } = await res.json();
      if (status === 200) {
        dispatch(deleteBlog(id));
        history('/');
      }
    })();
  }

  return (
    <div className="blog-details">
      {isLoading && <div>Loading ...</div>}
      {isError && <div>Server Internal Error</div>}
      {blog && (
        <div>
          <h1>{blog?.title}</h1>
          <h4>{blog?.author}</h4>
          <div>{blog?.body}</div>
        </div>
      )}
      <Button onClick={handleDelete} text="Delete" />
    </div>
  );
};

export default BlogDetail;
