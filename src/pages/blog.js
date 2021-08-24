import { useState } from "react";

const Blog = () => {

    const [blogs, setBlogs] = useState([
        { title: "My new Website", body: "Lorem ipsum", author: "John", id: 1 },
        { title: "Welcome to the Party", body: "Doler sit", author: "Doe", id: 2 },
        { title: "Web dev tool tips", body: "Amet ipsum", author: "Mario", id: 3 },
    ]);

    return (
       
        <div className="blog-div">
            <br/>
            <hr/>
            <br/>
            <h1>Blogs</h1>
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <h2>{ blog.title }</h2>
                    <p><strong>{ blog.body }</strong></p>
                    <p>Written By: { blog.author }</p>
                </div>
            ))}
        </div>

    );
}

export default Blog;