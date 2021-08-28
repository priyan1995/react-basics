import React from 'react';
import { Link } from 'react-router-dom';

class Navbar extends React.Component{
    render(){
        return(
            <nav className="navbar">
                <h1>Lorem Ipsum</h1>
                <div className="links">
                    <Link to="/">Home</Link>
                    {/* <Link to="/create">New Blog</Link> */}
                    <Link to="/users">Users</Link>
                    <Link to="/blogs">Blogs</Link>
                </div>
            </nav>
        )
    }
}

export default Navbar;