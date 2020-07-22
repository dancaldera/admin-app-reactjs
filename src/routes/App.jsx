import React, { Fragment } from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
// import SignIn from '../screens/SignIn'

// Layout
import Header from '../components/layout/Header'
import Navigation from '../components/layout/Navigation'

// Components
import Users from '../components/users/Users.jsx'
import Patients from '../components/patients/Patients.jsx'

function App() {
  return (
    <BrowserRouter>
      <Fragment>
        <Header />
        <div className='grid contenedor contenido-principal'>
          <Navigation />
          <main className='caja-contenido col-9'>
            <Switch>
              <Route exact path='/' component={Users} />
              <Route exact path='/patients' component={Patients} />
            </Switch>
          </main>
        </div>
      </Fragment>
    </BrowserRouter>
  )
}

export default App
