import ReactDOM from 'react-dom/client';

const id = 1;
const name = 'Subramanian'
const status = true
const address = {
    city: 'Coimbatore',
    state: 'Tamil Nadu'
}
const skills = ['Java', 'Javascript', 'react', 'Next', 'Microservices']

const User = () => <div>
    <UserDetails />
    <UserDetails id={id} name={name} />

</div>

const UserDetails = props => {
    return <div>
        <h1>Id : {props.id}</h1>
        <h2>Name : {props.name}</h2>
        <h3>Status: {props.status ? "Available" : "Not Available"}</h3>
        <h2>Address</h2>
        <address>
            <p>{props.address.city}</p>
            <p>{props.address.state}</p>
        </address>
        <h3>Skills</h3>
        <ol>
            {
                props.skills.map((skill) => {
                    return <li>{skill}</li>
                })
            }
        </ol>
    </div>
}

//default Property
UserDetails.defaultProps  = {
    id: 0,
    name: 'Your Name',
    status: false,
    skills:['skill1','skill2','skill3'],
    address: {
        city: 'Your City',
        state: 'Your State'
    }
}



const App = () => <User />
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);