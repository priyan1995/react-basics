import { useState } from "react";


const CreateBlog = () => {

    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const [author, setAuthor] = useState('Mario');
    const [isPending, setIsPending] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();
        const blog = { title, body, author };

        setIsPending(true);

        console.log(blog);

        fetch ('url' , {
            method: 'POST',
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(blog)
        }).then(()=>{
            console.log('New blog added');
            setIsPending(false);
        })

        
    } 

    return (
        <div className="create">
            <h2>Add New Blog</h2>
            <form onSubmit={handleSubmit}>

                <label>Blog Title</label>
                <input
                    type="text"
                    required
                    value = {title}
                    onChange={(e) => setTitle(e.target.value)}
                />

                <label>Blog Body</label>
                <textarea
                 required
                 value = {body}
                 onChange = {(e)=> setBody(e.target.value) }
                 ></textarea>

                <label>Blog Author</label>
                <select
                value = {author}
                onChange = {(e)=> setAuthor(e.target.value)}
                >
                    <option value="Mario">Mario</option>
                    <option value="Doe">Doe</option>
                </select>

                { !isPending && <button>Add Blog</button> }
                { isPending && <button>Saving....</button> }


            </form>

            <h4>Title: {title}</h4>
            <p><strong>Body:</strong> {body}</p>
            <h6>Author: {author}</h6>



        </div>
    );
}


export default CreateBlog;