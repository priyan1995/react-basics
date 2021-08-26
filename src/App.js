
import './App.css';
import Navbar from './pages/navbar';
import Home from './pages/home';
import Blog from './pages/blog'
import UserData from './pages/userData';

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Blog />
      <hr />
      <br />
      <UserData />



    </div>
  );
}

export default App;
