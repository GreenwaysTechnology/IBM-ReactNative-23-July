import ReactDOM from 'react-dom/client';
import React from 'react';

class Review extends React.Component {

    //state declaration
    state = {
        like: 1,
        dislike: 10
    }
    onLike = () => {
        this.setState(preState => {
            // return {
            //     like: preState.like + 1,
            //     dislike: preState.dislike
            // }
            //return Object.assign({}, preState, { like: preState.like + 1 })
            return { ...preState, like: preState.like + 1 }
        })
    }
    onDislike = () => {
        this.setState(preState => {
            return { ...preState, dislike: preState.dislike + 1 }
        })
    }

    render() {
        console.log(this.state)
        return <div>
            <h1>Review App</h1>
            <h2>Like {this.state.like} Dislike {this.state.dislike}</h2>
            <button onClick={this.onLike} >Like</button>
            <button onClick={this.onDislike} >Dislike</button>
            {/* inline listener */}
            <button onClick={() => {
                this.setState(preState => {
                    return { ...preState, like: preState.like + 1 }
                })
            }}>Like</button>
        </div>
    }
}


const App = () => <>
    <Review />
</>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);