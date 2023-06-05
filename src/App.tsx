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

    // const foo1 = () => {
    //     console.log(100200)
    // }
    //
    // const foo2 = (text: number) => {
    //     console.log(text)
    // }

    return (
        <div className="App">
            {/*<button onClick={(event)=>{console.log('Hello')}}>First</button>*/}
            <button onClick={(event)=>{onClickHandler('IVAN')}}>My YouTube Chanel - 1</button>
            <button onClick={(event)=>{onClickHandler('ALLA')}}>My YouTube Chanel - 2</button>

            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={(event)=>{foo2(100200)}}>2</button>*/}

        </div>
    );
}

export default App;
