import { useCallback, useEffect, useMemo, useState } from "react";
import BlogList from "../layouts/BlogList";
import useFetch from "../hooks/useFetch";
import { useSelector } from "react-redux";

const Home = () => {

    const { data: blogs, isError, isLoading } = useFetch('https://backend-crud-ten.vercel.app/blogs');

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