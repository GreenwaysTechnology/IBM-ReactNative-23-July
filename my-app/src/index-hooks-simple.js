import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';


const Counter = props => {
    //state declaration
    const [counter, setCounter] = useState(0)

    const onIncrement = () => {
        setCounter((prevCounter) => {
            console.log(prevCounter)
            return prevCounter + 1
        })
    }

    return <div>
        <h1>Counter App</h1>
        <h1>Counter {counter}</h1>
        <button onClick={onIncrement}>+</button>
    </div>
}


const App = () => <>
    <Counter />
</>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);