import { useState } from "react";

const Home = () => {

  // tutorial 7
  const handleClick = (e) => {
    console.log('hello ninjas', e);
  }

  const handleClickAgain = (name, e) => {
    console.log('hello ' + name, e.target);
  }

  // tutorial 8
  const [name, setName] = useState('User');
  const [Greeting, setGreeting] = useState('');
  const [gender, showGender] = useState('');

  const changeName = () => {
    setName('Priyan');
    setGreeting('Welcome to the New React App');
  }

  const getGender = () => {
    showGender('Male');
  }


  return (
    <div className="home">
      <h2>Homepage</h2>

      {/* tutorial 7 */}
      <button onClick={handleClick}>Click me</button>
      <button onClick={(e) => handleClickAgain('mario', e)}>Click me again</button>

      <br/>
      <hr/>
      <br />

      {/* tutorial 8 */}
      <h4>Hello { name }...{ Greeting }</h4>
      <br/>
      <button onClick={changeName}>Change Name</button>

      <div className="show-gender">
        <p>I'm a { gender }.</p>
        <button onClick={getGender}>Show Gender</button>
      </div> 


    </div>
  );
}

export default Home;