import { Router, RouteComponentProps } from '@reach/router'
import React from 'react'
import '../assets/styles/App.css'
import HomePage from '../screens/HomePage'

let Dash = (props: RouteComponentProps) => <div>Dash</div>

function App() {
  return (
    <Router>
      <HomePage path='/' />
      <Dash path='dashboard' />
    </Router>
  )
}

export default App
