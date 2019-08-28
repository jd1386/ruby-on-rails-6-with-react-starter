import React from 'react'
import { Link } from 'react-router-dom'

class About extends React.Component {
  render() {
    return (
      <>
        <div>This is the About page.</div>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/posts">Posts</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </>
    )
  }
}

export default About