import React from 'react'
import { Link } from 'react-router-dom'

class Contact extends React.Component {
  render() {
    return (
      <>
        <div>This is the Contact page.</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/about">About</Link></li>
        </ul>
      </>
    )
  }
}

export default Contact