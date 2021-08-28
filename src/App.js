
import './App.css';
import Navbar from './pages/navbar';
import Home from './pages/home';
import Blog from './pages/blog'
import UserData from './pages/userData';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import CreateBlog from './pages/create';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Switch>

          <Route exact path="/">
            <Home />
            <hr />
            <br />
            <Blog />
            <UserData />
          </Route>

          <Route path="/create">
            <CreateBlog />
          </Route>

        </Switch>
      </div>


    </Router>




  );
}

export default App;
