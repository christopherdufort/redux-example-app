import React, { Component } from 'react';
import propTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
    // State comes from redux now

    // Lifecycle method
    componentWillMount(){
        this.props.fetchPosts();
    }

    render() {
        // Map the items from state into a list of divs containing the details
        const postItems = this.props.posts.map(post =>(
            <div key={post.id}>
                <h3>{post.id}.{post.title}</h3>
                <p>{post.body}</p>
            </div>
        ));
        return (
            <div>
                <h1>Posts</h1>
                {/* display the new value */}
                {postItems}         
            </div>
        );
    }
}

Posts.propTypes = {
    fetchPosts: propTypes.func.isRequired,
    posts: propTypes.array.isRequired
}

// MapStateToProps => get state from redux, and map it to properties of component
const mapStateToProps = state =>({
    posts: state.posts.items
});

export default connect(mapStateToProps,{fetchPosts})(Posts);

