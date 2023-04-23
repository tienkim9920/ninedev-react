import BlogList from "./BlogList";
import useFetch from "./useFetch";

const Home = () => {

    const { data: blogs, isError, isLoading } = useFetch('http://localhost:8000/blogs');

    return (
        <div>
            {isError && <div>Server Internal Error</div>}
            {isLoading && <div>Please waiting for minutes</div>}
            {
                blogs && 
                <BlogList blogs={blogs} author="Nine Dev Blog"/>
            }
        </div>
    )
}

export default Home;