import logo from './logo.svg';
import './App.css';
import Navbar from  './pages/navbar';
import Home from './pages/home';
import Blog from './pages/blog'

function App() {
  return (
    <div className="App">
      <Navbar />
      <Home />
      <Blog />
      
    </div>
  );
}

export default App;
