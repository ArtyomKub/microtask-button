import React from 'react';
import './App.css';


function App() {
    // const myFirstSubscriber = (event:React.MouseEvent<HTMLButtonElement>) => {
    //     console.log('IVAN')
    // }
    //
    // const mySecondSubscriber = (event:React.MouseEvent<HTMLButtonElement>) => {
    //     console.log('ALLA')
    // }

    const onClickHandler = (name: string) => {
        console.log(name)
    }


    return (
        <div className="App">
            {/*<button onClick={(event)=>{console.log('Hello')}}>First</button>*/}
            <button onClick={()=>{onClickHandler('IVAN')}}>My YouTube Chanel - 1</button>
            <button onClick={()=>{onClickHandler('ALLA')}}>My YouTube Chanel - 2</button>
        </div>
    );
}

export default App;
