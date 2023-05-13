import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setBlog } from "../store/blog/blogAction";

const useFetch = (url, id) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isError, setIsError] = useState(false);

  const blogs = useSelector(state => state.blogs.list);
  const dispatch = useDispatch();

  useEffect(() => {
    if (id && blogs.length) {
      const blog = blogs.find(item => item.id === Number(id));
      setData(blog);
      setIsLoading(false);
    } else if (blogs.length) {
      setData(blogs);
      setIsLoading(false);
    } else {
      (async () => {
        try {
          setIsLoading(true);
          const res = await fetch(url);
          const { data, status } = await res.json();
          if (status === 200) {
            setData(data);
            setIsLoading(false);
            dispatch(setBlog(data));
          }
        } catch (error) {
          setIsError(true);
          setIsLoading(false);
        }
      })();
    }
  }, []);

  return { data, isLoading, isError };
};

export default useFetch;
