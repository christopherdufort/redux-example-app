import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { fetchPosts } from '../actions/postActions';

class Posts extends Component {
    // State comes from redux now

    // Lifecycle method
    componentWillMount(){
        this.props.fetchPosts();
    }

    // Run when recieving new property
    componentWillReceiveProps(nextProps){
        if(nextProps.newPost){
            // Push to end or unshift to start
            this.props.posts.unshift(nextProps.newPost);
        }
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
    fetchPosts: PropTypes.func.isRequired,
    posts: PropTypes.array.isRequired,
    newPost: PropTypes.object
}

// MapStateToProps => get state from redux, and map it to properties of component
const mapStateToProps = state =>({
    posts: state.posts.items,
    newPost: state.posts.item
});

export default connect(mapStateToProps,{fetchPosts})(Posts);

