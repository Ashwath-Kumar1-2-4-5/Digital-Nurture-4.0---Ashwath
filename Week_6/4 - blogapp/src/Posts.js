// src/Posts.js
import React from 'react';
import Post from './Post'; // Ensure this import is correct based on your project structure

class Posts extends React.Component {
  constructor(props){
    super(props);
    this.state = {
        posts: [],
        error: null,
        hasError: false
    };
  }

  loadPosts() {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then(response => {
        if (!response.ok) {
          throw new Error(`HTTP error! status: ${response.status}`);
        }
        return response.json();
      })
      .then(data => {
        this.setState({ posts: data });
      })
      .catch(error => {
        console.error("Error fetching posts:", error);
        this.setState({ error: error, hasError: true });
      });
  }

  // >>>>>> Ensure this 'componentDidMount' block is ONLY present ONCE <<<<<<
  componentDidMount() {
    this.loadPosts();
  }
  // >>>>>> DO NOT have another 'componentDidMount' block immediately after this one <<<<<<


  render() {
    if (this.state.hasError) {
      return <h1>Something went wrong. Please try again later.</h1>;
    }
    if (this.state.posts.length === 0) {
      return <h1>Loading posts...</h1>;
    }
    return (
      <div>
        <h1>Blog Posts</h1>
        {this.state.posts.map(post => (
          <div key={post.id} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px', borderRadius: '5px' }}>
            <h2>{post.title}</h2>
            <p>{post.body}</p>
          </div>
        ))}
      </div>
    );
  }

  componentDidCatch(error, info) {
    this.setState({ hasError: true });
    console.error("Caught an error in Posts component:", error, info);
    alert("An error occurred in the Posts component: " + error.message);
  }
}

export default Posts;