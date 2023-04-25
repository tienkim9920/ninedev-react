import { useParams } from "react-router-dom";
import useFetch from "./useFetch";

const BlogDetail = () => {
  const { id } = useParams();
  const {
    data: blog,
    isLoading,
    isError,
  } = useFetch(`http://localhost:8000/blogs/${id}`);

  return (
    <div>
      {isLoading && <div>Loading ...</div>}
      {isError && <div>Server Internal Error</div>}
      {blog && (
        <div>
          <h1>{blog?.title}</h1>
          <h4>{blog?.author}</h4>
          <div>{blog?.body}</div>
        </div>
      )}
    </div>
  );
};

export default BlogDetail;
