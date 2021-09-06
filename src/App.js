import React from 'react';
import usePosts from './hooks/usePosts';

const App = () => {
    const posts = usePosts();

    const renderedPosts = posts.map((post) => {
        return <li key={post.id}>{post.title}</li>
    })

    return(
        <div>
            <h3>Posts</h3>
            <h1>Hello!!</h1>
            <ul>{renderedPosts}</ul>
        </div>
    )
}

export default App;
