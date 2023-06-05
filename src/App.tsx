import React from 'react';
import './App.css';

function App() {
    const myFirstSubscriber = (event:React.MouseEvent<HTMLButtonElement>) => {
        console.log('IVAN')
    }

    const mySecondSubscriber = (event:React.MouseEvent<HTMLButtonElement>) => {
        console.log('ALLA')
    }

    return (
        <div className="App">
            <button onClick={(event)=>{console.log('Hello')}}>First</button>
            <button onClick={myFirstSubscriber}>My YouTube Chanel - 1</button>
            <button onClick={mySecondSubscriber}>My YouTube Chanel - 2</button>
        </div>
    );
}

export default App;
