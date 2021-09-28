import React from 'react'
import Container from 'react-bootstrap/Container'
import Login from './Login'
import Signup from './Signup'
import Discussions from './Discussions'
import Navbar from './Navbar/Navbar'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Discussions} />
        <Route path="/login" component={Login} />
        <Route path="/signup" component={Signup} />
      </Switch>
    </Router>
  )
}

export default App
