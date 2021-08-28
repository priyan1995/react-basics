import { useEffect, useState } from "react";

const UserData = () => {
    
    const [users, setUsers] = useState([]);
    const [isPending, setIsPending] = useState(true);

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/todos/1')
            .then(res => {
                return res.json();
            })
            .then(data => {
                console.log(data);
                // const blogid = (data.id);
                // console.log(blogid);
                // const title = data.title;
                setUsers(data);
                setIsPending(false);
            })
        // console.log(users);

    })


    return (
        <div>
            { isPending && <div><h3>Loading...</h3></div> }
            <h1>User Data</h1>
            <hr />

            <p>User ID : { users.userId }</p>
            <p>Title : { users.title }</p>    
        </div>
    );
}

export default UserData;