import React from 'react';
import ReactDOM from 'react-dom/client';


// const User = (name,id) => {
//     return <>
//       {name} {id}
//     </>
// }

// const User =(userinfo)=>{
//     console.log(userinfo)
//      return <h1>{userinfo.name}</h1>
// }

// const User = (props) => {
//     console.log(props)
//     return <div>
//         <h1>Id : {props.id}</h1>
//         <h2>Name : {props.name}</h2>
//         <h3>Status: {props.status ? "Available" : "Not Available"}</h3>
//         <h2>Address</h2>
//         <address>
//             <p>{props.address.city}</p>
//             <p>{props.address.state}</p>
//         </address>
//         <h3>Skills</h3>
//         <ol>
//             {
//                 props.skills.map((skill) => {
//                     return <li>{skill}</li>
//                 })
//             }
//         </ol>
//     </div>
// }

// const User = (props) => {
//     console.log(props)
//     const { id, name, status, address: { city, state }, skills } = props;
//     return <div>
//         <h1>Id : {id}</h1>
//         <h2>Name : {name}</h2>
//         <h3>Status: {status ? "Available" : "Not Available"}</h3>
//         <h2>Address</h2>
//         <address>
//             <p>{city}</p>
//             <p>{state}</p>
//         </address>
//         <h3>Skills</h3>
//         <ol>
//             {
//                 skills.map((skill) => {
//                     return <li>{skill}</li>
//                 })
//             }
//         </ol>
//     </div>
// }

const User = ({ id, name, status, address: { city, state }, skills }) => <div>
    <h1>Id : {id}</h1>
    <h2>Name : {name}</h2>
    <h3>Status: {status ? "Available" : "Not Available"}</h3>
    <h2>Address</h2>
    <address>
        <p>{city}</p>
        <p>{state}</p>
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


