import ReactDOM from 'react-dom/client';
import React from 'react';

class Counter extends React.Component {

    //state declaration
    state = {
        counter: 0 //inital state
    }
    //listener 
    onIncrement = () => {
        console.log('button is clicked')
        // this.setState(function (prvState) {
        //     //you must return immutable state object 
        //     //we must return new state every time 
        //     return {
        //         counter: prvState.counter + 1
        //     }
        // })
        // this.setState(prvState => {
        //     return {
        //         counter: prvState.counter + 1
        //     }
        // })

        // this.setState(prvState => {
        //     //Return object using Object.assign method
        //     return Object.assign({}, prvState, { counter: prvState.counter + 1 })
        // })
        //Using Es 7 Spread Operator
        this.setState(prvState => {
            //Return object using Object.assign method
            return { ...prvState, counter: prvState.counter + 1 }
        })
    }

    render() {
        console.log(this.state)
        return <div>
            <h1>Counter App</h1>
            <h2>Value {this.state.counter}</h2>
            <button onClick={this.onIncrement} >+</button>
        </div>
    }
}


const App = () => <>
    <Counter />
</>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);