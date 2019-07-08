import React, { Component } from 'react'

class Posts extends Component {
    // Accepts props in constructor
    constructor(props){
        // passes props to super
        super(props);
        this.state = {
            posts: []
        }
    }

    // Life cyle method
    componentWillMount(){
        console.log('Component did mount');
        // returns a promise, map to json       
        fetch('https://jsonplaceholder.typicode.com/posts')
            .then(res => res.json())
            .then(data => this.setState({posts: data})); // store the response data in the local state
    }

    render() {
        // Map the items from state into a list of divs containing the details
        const postItems = this.state.posts.map(post =>(
            <div key={post.id}>
                <h3>{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {/* display the new value */}
                {postItems}       
                      
            </div>
        )
    }
}

export default Posts;

