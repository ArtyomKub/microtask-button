import React from 'react';
import './App.css';
import {Button} from "./components/Button";


function App() {
    // const myFirstSubscriber = (event:React.MouseEvent<HTMLButtonElement>) => {
    //     console.log('IVAN')
    // }

    // const mySecondSubscriber = (event:React.MouseEvent<HTMLButtonElement>) => {
    //     console.log('ALLA')
    // }

    // const foo1 = () => {
    //     console.log(100200)
    // }

    // const foo2 = (text: number) => {
    //     console.log(text)
    // }

    // const onClickHandler = (name: string) => {
    //     console.log(name)
    // }

    const Button1Foo = (subscriber:string, age: number) => {
        console.log(subscriber, age)
    }

    const Button2Foo = (subscriber:string) => {
        console.log(subscriber)
    }

    return (
        <div className="App">
            {/*<button onClick={(event)=>{onClickHandler('IVAN')}}>My YouTube Chanel - 1</button>*/}
            {/*<button onClick={(event)=>{onClickHandler('ALLA')}}>My YouTube Chanel - 2</button>*/}
            {/*<button onClick={(event)=>{console.log('Hello')}}>First</button>*/}
            {/*<button onClick={foo1}>1</button>*/}
            {/*<button onClick={(event)=>{foo2(100200)}}>2</button>*/}
            <Button name={'My YouTube Chanel - 1'} callback={()=>Button1Foo('IVAN', 21)}/>
            <Button name={'My YouTube Chanel - 2'} callback={()=>Button2Foo('ALLA')}/>

        </div>
    );
}

export default App;
