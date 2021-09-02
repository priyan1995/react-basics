
import './App.css';
import Navbar from './pages/navbar';
import Home from './pages/home';
import Blog from './pages/blog'
import UserData from './pages/userData';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './pages/create';
import BlogDetails from './pages/blogSingle';
import CreateUser from './pages/createUser';
import NotFound from './pages/notFound';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>

          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/create">
            <CreateBlog />
          </Route>

          <Route path="/blogs">
            <Blog />
          </Route>

          <Route path="/singleBlogs/:id">           
            <BlogDetails />
          </Route>

          <Route path="/users">           
            <UserData />
          </Route>

          <Route path="/createUser">
            <CreateUser />
          </Route>

          <Route path="*">
            <NotFound />
          </Route>

      

        </Switch>
      </div>


    </Router>




  );
}

export default App;
