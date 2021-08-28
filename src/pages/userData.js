import { useEffect, useState } from "react";

const UserData = () => {
    
    const [users, setUsers] = useState([]);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
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
                setUsers(data);
                setIsPending(false);
                setError(null);
            })
            .catch(err => {
                console.log(err.message);
                setError(err.message);
                setIsPending(false);
            })
        // console.log(users);

    })


    return (
        <div>
           
            <h1>User Data</h1>
            <br/>
            <hr />
            <br/>

            { error && <div>{ error }</div> }
            { isPending && <div><h3>Loading...</h3></div> }

            <p>User ID : { users.userId }</p>
            <p>Title : { users.title }</p>    
        </div>
    );
}

export default UserData;