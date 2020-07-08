import { Router } from '@reach/router'
import React from 'react'
import '../assets/styles/App.css'
import HomePage from '../screens/HomePage'

function App() {
  return (
    <Router>
      <HomePage path='/' />
    </Router>
  )
}

export default App
