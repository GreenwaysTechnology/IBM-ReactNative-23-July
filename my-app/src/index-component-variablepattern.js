import ReactDOM from 'react-dom/client';



//create root component
const App = <h1>Welcome to React!</h1>
// const rootElement = document.getElementById('root')
const root = ReactDOM.createRoot(document.getElementById('root'))
//render will insert rootComponent into <div>?</div>
root.render(App)