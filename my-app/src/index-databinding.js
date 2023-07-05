import React from 'react';
import ReactDOM from 'react-dom/client';

const User = () => {
    const id = 1;
    const name = 'Subramanian'
    const status = true
    const address = {
        city: 'Coimbatore',
        state: 'Tamil Nadu'
    }
    const skills = ['Java', 'Javascript', 'react', 'Next', 'Microservices']
    return <div>
        <h1>Id : {id}</h1>
        <h2>Name : {name}</h2>
        <h3>Status: {status ? "Available" : "Not Available"}</h3>
        <h2>Address</h2>
        <address>
            <p>{address.city}</p>
            <p>{address.state}</p>
        </address>
        <h3>Skills</h3>
        <ol>
            {
                skills.map((skill) => {
                    return <li>{skill}</li>
                })
            }
        </ol>
    </div>
}


const App = () => {
    return <User />
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


