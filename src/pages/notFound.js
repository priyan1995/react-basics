import { Link } from "react-router-dom"

const NotFound = () => {
    return (
        <div className="not-found">
            <h1>Sorry</h1>
            <h4>Page Not Found</h4>
            <Link to="/">Home..</Link>
        </div>
    )
}

export default NotFound;