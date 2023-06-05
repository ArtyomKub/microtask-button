import React from 'react';
import './App.css';

function App() {
    const myFirstSubscriber = () => {
        console.log('IVAN')
    }

    const mySecondSubscriber = () => {
        console.log('ALLA')
    }

    return (
        <div className="App">
            <button onClick={myFirstSubscriber}>My YouTube Chanel - 1</button>
            <button onClick={mySecondSubscriber}>My YouTube Chanel - 2</button>
        </div>
    );
}

export default App;
