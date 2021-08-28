import { useEffect, useState } from "react";
import useFetch from "../hooks/fetchData";

const UserData = () => {
    
   const  {data: users , isPending, error} = useFetch('https://jsonplaceholder.typicode.com/todos/1');


    return (
        <div>
           
           <hr />
            <br />
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