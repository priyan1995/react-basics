import { useEffect, useState } from "react";

const useFetch = (url) => {
    const [data, setData] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(true);

    useEffect(() => {
        // fetch('https://jsonplaceholder.typicode.com/todos/1')
        fetch(url)
            .then(res => {               
                if(!res.ok){
                    throw Error('Could not fetch the data for that resource..');
                }
                return res.json();
            })
            .then(data => {
                console.log(data);
                // const blogid = (data.id);
                // console.log(blogid);
                // const title = data.title;
                setData(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            })
        // console.log(users);

    }, [url])

    return {data , isPending, error};
}

export default useFetch;