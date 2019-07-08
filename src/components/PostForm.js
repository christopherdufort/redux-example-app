import React, { Component } from 'react'

class PostForm extends Component {
    constructor(props){
        super(props);
        this.state = {
            postTitle: '',
            postBody: ''
        };
        // Binding allows for use of this in onChange
        this.onChange = this.onChange.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // Updates the stats with the content of the inputs on change
    onChange(e) {
        this.setState({[e.target.name]: e.target.value});
    }
    onSubmit(e){

    }

    render() {
        return (
            <div>
                <h1>Add Post</h1>
                <form onSubmit={this.onSubmit}>
                    <div>
                        <label>Title: </label><br/>
                        <input type="text" name="postTitle" value={this.state.title} onChange={this.onChange}/>
                    </div>
                    <br />
                    <div>
                        <label>Body: </label><br/>
                        <textarea name="postBody" value={this.state.body} onChange={this.onChange}/>
                    </div>
                    <br/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default PostForm;
