import ReactDOM from 'react-dom/client';

//Create Component using functions 
//Es 5 style
// function App() {
//     //Returns Component
//     return <h1>Wecome to React</h1>
// }
// const App = () => {
//     return <h1>Wecome to React</h1>
// }
const App = () => <h1>Wecome to React</h1>

const root = ReactDOM.createRoot(document.getElementById('root'))
//Calling function which inserts Component : but it is not recommended
//root.render(App())
root.render(<App></App>)