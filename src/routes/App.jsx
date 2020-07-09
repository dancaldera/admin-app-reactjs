import { Router } from '@reach/router'
import React from 'react'
import '../assets/styles/App.css'
import SignIn from '../screens/SignIn'

function App() {
  return (
    <Router>
      <SignIn path='/' />
    </Router>
  )
}

export default App
