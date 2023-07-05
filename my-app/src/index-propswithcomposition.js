import React from 'react';
import ReactDOM from 'react-dom/client';


export const Address = ({ city, state }) => <>
    <h2>Address</h2>
    <address>
        <p>{city}</p>
        <p>{state}</p>
    </address>
</>
const Skills = ({ skills }) => <><h3>Skills</h3>
    <ol>
        {
            skills.map((skill) => {
                return <li>{skill}</li>
            })
        }
    </ol>
</>
export const UserDetails = ({ id, name, status, address, skills }) => <> <h1>Id : {id}</h1>
    <h2>Name : {name}</h2>
    <h3>Status: {status ? "Available" : "Not Available"}</h3>
    <Address address={address} />
    <Skills skills={skills} />
</>

// export const User = ({ id, name, status, address, skills }) => <div>
//     <UserDetails id={id} name={name} address={address} skills={skills} />
// </div>

export const User = props => <div>
    <UserDetails {...props} />
</div>




const App = () => {
    const id = 1;
    const name = 'Subramanian'
    const status = true
    const address = {
        city: 'Coimbatore',
        state: 'Tamil Nadu'
    }
    const skills = ['Java', 'Javascript', 'react', 'Next', 'Microservices']

    //return User('Subramanian',1);
    return <>
        <User name={name} id={id} status={status} address={address} skills={skills} />
        <User name={'Ram'} id={2} status={status} address={{ city: 'Chennai', state: 'Tamil Nadue' }} skills={['Devops', 'Cloud']} />
    </>
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);


