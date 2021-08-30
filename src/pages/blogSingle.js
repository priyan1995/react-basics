import { useParams } from "react-router-dom";
import { useState } from "react";

const BlogDetails = () =>{
    
    
    const [blogs] = useState([
        { title: "My new Website", body: "Lorem ipsum", author: "Mario", id: 1 },
        { title: "Welcome to the Party", body: "Doler sit", author: "Doe", id: 2 },
        { title: "Web dev tool tips", body: "Amet ipsum", author: "Mario", id: 3 },
    ]);

    const { id } = useParams(); // catch the ID from url
    

    return (
        <div className="blog-details">
            {blogs.filter(blogs => blogs.id == id).map(filteredBlog =>(
                <div>
                    <h2>{ filteredBlog.title }</h2>
                    <p>{ filteredBlog.body }</p>
                    <h6>Author: { filteredBlog.author }</h6>
                </div>
            ))}
            
        </div>
    );
}

export default BlogDetails;