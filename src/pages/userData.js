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
            

            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">First</th>
                        <th scope="col">Last</th>
                        <th scope="col">Handle</th>
                    </tr>
                </thead>
                <tbody>

                    <tr>
                        <th scope="row">{ users.id }</th>
                        <td></td>
                        <td>Otto</td>
                        <td>@mdo</td>
                    </tr>
                   
                </tbody>
            </table>

        </div>
    );


}

export default UserData;