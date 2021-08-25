import { useState } from "react";
import BlogList from "./blogList";

const Blog = () => {

    const [blogs, setBlogs] = useState([
        { title: "My new Website", body: "Lorem ipsum", author: "Mario", id: 1 },
        { title: "Welcome to the Party", body: "Doler sit", author: "Doe", id: 2 },
        { title: "Web dev tool tips", body: "Amet ipsum", author: "Mario", id: 3 },
    ]);

    return (

        <div className="blog-div">
            <br />
            <hr />
            <br />
            
           <BlogList blogs = {blogs} title="Blogs" />
           <BlogList blogs = { blogs.filter((blog) => blog.author === 'Mario') } title="Mario's Blogs" />
        </div>

    );
}

export default Blog;