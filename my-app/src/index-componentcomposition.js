import React from 'react';
import ReactDOM from 'react-dom/client';

//React Fragements: invisble container element which is used to escape compile time errors without using container element.

const ArticleListItemDetails = () => <>
    <li>Components are building blocks</li>
    <li>Components helps to reuse</li>
    <li>Components helps to scale ui</li>
</>

const ArticleListItem = () => <ol>
    <ArticleListItemDetails />
</ol>

const ArticleTitle = () => <h1>Article title</h1>

const ArticleList = () => <ArticleListItem />
const Article = () => {
    return <article>
        <ArticleTitle />
        <ArticleList />
    </article>
}
const Blog = () => {
    return <Article />
}

const App = () => {
    return <div>
        <Blog />
    </div>
}

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<App />)