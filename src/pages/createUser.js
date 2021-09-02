import { useState } from "react";
import { useHistory } from "react-router-dom";

const CreateUser = () => {


    const [info, setInfo ] = useState('');
    const history = useHistory();

    const userSubmit = (e) => {
        e.preventDefault();
        // console.log('form submitted');
        const users = { info }
        console.log(info);

        fetch('https://jsonplaceholder.typicode.com/todos/1', {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(info)
        }).then(()=>{
            console.log('new user added');
            history.push('/users');
        })
    }


    return(
        <div className="create">
            <br />
            <h3>Create New User</h3>
            <br />
            <hr />

            <form onSubmit={ userSubmit }>
                <input 
                    type="text"
                    required
                    value ={info}
                    onChange = { (e)=>setInfo(e.target.value) }
                />

                <button >Add User</button>

            </form>



        </div>
    )
}

export default CreateUser;
