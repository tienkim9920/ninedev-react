import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(false);
    const [isError, setIsError] = useState(false);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true);
                const res = await fetch(url);
                const { data, status } = await res.json();
                if (status === 200) {
                    setData(data);
                    setIsLoading(false);
                }
            } catch (error) {
                setIsError(true);
                setIsLoading(false);
            }
        })();
    }, [])

    return { data, isLoading, isError}
}

export default useFetch;