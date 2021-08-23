import React from 'react';

class Home extends React.Component{
    
    render(){
        // const content = 'Home page content here';
        // const link = "https://www.youtube.com";
        const handleClick = () =>{
            console.log('Hello There');
        }


        return(
            // <h1>{ content }</h1>            
            // <a href={ link }>Watch react tutorials here</a>
            
            <button onClick={handleClick}>Click Me</button>
        )
    }
}

export default Home;