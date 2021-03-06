import { Link } from "react-router-dom";


const BlogList = (props) => {
    const blogs = props.blogs;
    const title = props.title;
    const handleHide = props.handleHide;   
    return (
        <div className="blog-list">

            <h1> { title }</h1>
            <br />
            <hr />
            {blogs.map((blog) => (
                <div className="blog-preview" key={blog.id}>
                    <Link to={`/singleBlogs/${blog.id}`}>
                    <h2>{blog.title}</h2>
                    <p><strong>{blog.body}</strong></p>
                    </Link>
                    <p>Written By: {blog.author}</p>
                    <button onClick={() => handleHide(blog.id)}>Hide Blog</button>
                </div>
            ))}
        </div>
    );
}

export default BlogList;