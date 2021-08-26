import { useEffect, useState } from "react";

const UserData = () => {

    const [users, setUsers] = useState([]);

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
            })
        // console.log(users);

    })


    return (
        <div>
            <h1>User Data</h1>
            <hr />

            <p>User ID : { users.userId }</p>
            <p>Title : { users.title }</p>    
        </div>
    );
}

export default UserData;