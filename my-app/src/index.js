import ReactDOM from 'react-dom/client';
import React, { useState } from 'react';


const Review = props => {
    //state declaration
    const [review, setReview] = useState({ like: 0, dislike: 0 })

    const onLike = () => {
        setReview(prevReview => {
            return { ...prevReview, like: prevReview.like + 1 }
        })
    }

    return <div>
        <h1>Review App</h1>
        <h1>Like {review.like} Dislike {review.dislike}</h1>
        <button onClick={onLike}>Like</button>
        <button onClick={() => {
            setReview(prevReview => {
                return { ...prevReview, dislike: prevReview.dislike + 1 }
            })
        }}>Dislike</button>

    </div>
}


const App = () => <>
    <Review />
</>


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);