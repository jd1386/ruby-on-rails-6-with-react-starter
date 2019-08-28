import React from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Posts extends React.Component {
  state = {
    posts: []
  }

  async componentDidMount() {
    const res = await axios.get('/api/posts')
    const { posts } = res.data

    if (posts.length) {
      this.setState({ posts })
    }
  }

  render() {
    const { posts } = this.state

    return (
      <>
        <div>This is the Posts page.</div>
        <ul>
          {posts.map((post, index) => (
            <li key={index}>{post}</li>
          ))}
        </ul>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </>
    )
  }
}

export default Posts