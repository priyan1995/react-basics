import React from 'react';

class Home extends React.Component{
    
    render(){
        const content = 'Home page content here';
        // const link = "https://www.youtube.com";
        return(
            <h1>{ content }</h1>
            
            // <a href={ link }>Watch react tutorials here</a>
        )
    }
}

export default Home;