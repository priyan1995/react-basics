import { useState, useEffect } from "react";
import BlogList from "./blogList";

const Blog = () => {

    const [blogs, setBlogs] = useState([
        { title: "My new Website", body: "Lorem ipsum", author: "Mario", id: 1 },
        { title: "Welcome to the Party", body: "Doler sit", author: "Doe", id: 2 },
        { title: "Web dev tool tips", body: "Amet ipsum", author: "Mario", id: 3 },
    ]);

    const handleHide = (id) => {
        const newBlogs = blogs.filter( blog => blog.id !== id);
        setBlogs(newBlogs);
    }

    useEffect( () => {
        console.log('Event fired..');
        console.log(blogs);
    })


    return (

        <div className="blog-div">
            <br />
            <hr />
            <br />
            
           <BlogList blogs = {blogs} title="Blogs" handleHide={handleHide} />
           <BlogList blogs = { blogs.filter((blog) => blog.author === 'Mario') } handleHide={handleHide} title="Mario's Blogs" />
        </div>

    );
}

export default Blog;