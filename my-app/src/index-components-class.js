import React from 'react';
import ReactDOM from 'react-dom/client';

//class 
class App extends React.Component {

    //override render method
    render(){
        return <h1>Welcome to React</h1>
    }
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<App></App>)