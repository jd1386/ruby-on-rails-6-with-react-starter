import React from 'react'
import { Route, Switch } from 'react-router-dom'
import Home from './Home'
import Posts from './Posts'
import About from './About'
import Contact from './Contact'

class App extends React.Component {
  render() {
    return (
      <div>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/posts" component={Posts} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
        </Switch>
      </div>
    )
  }
}

export default App