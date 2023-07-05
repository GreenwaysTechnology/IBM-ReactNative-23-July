import ReactDOM from 'react-dom/client';
import React from 'react';

class Review extends React.Component {
    state = {
        like: 1,
        dislike: 10
    }
    onLike = () => {
        this.setState(preState => {
            return { ...preState, like: preState.like + 1 }
        })
    }
    onDislike = () => {
        this.setState(preState => {
            return { ...preState, dislike: preState.dislike + 1 }
        })
    }

    render() {
        return <div>
            <ReviewDisplay {...this.state} onLike={this.onLike} onDislike={this.onDislike} />
        </div>
    }
}

const ReviewDisplay = props => {
    console.log(props)
    return <> <h1>Review App</h1>
        <h2>Like {props.like} Dislike {props.dislike}</h2>
        <button onClick={props.onLike} >Like</button>
        <button onClick={props.onDislike} >Dislike</button>
    </>
}


const App = () => <>
    <Review />
</>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);