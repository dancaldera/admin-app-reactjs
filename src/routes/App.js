import React from "react"
import Home from "../screens/Home"
import Login from "../screens/Login"
import NavBar from "../components/NavBar"
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom"
import "../assets/styles/App.css"

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Switch>
        <Route exact path='/' component={Home} />
        <Route path='/admin' component={Login} />
        <Redirect to='/' />
      </Switch>
    </BrowserRouter>
  )
}

export default App
