import React from 'react';
import ReactDOM from 'react-dom/client';

const App = () => {
    //return <h1>Hello
    // return <div>
    //     <h1>Hello</h1>
    //     <p>How are you?</p>
    // </div>
    return React.createElement('h1',null,'Welcome To React!');
}

const root = ReactDOM.createRoot(document.getElementById('root'))

// root.render(<App></App>)
// root.render(<app></app>)

root.render(<App />)