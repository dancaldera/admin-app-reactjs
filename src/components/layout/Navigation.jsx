import React from 'react'

// import { Link } from 'react-router-dom'

const Navigation = () => {
  return (
    <aside className='sidebar col-3'>
      <h2>Administración</h2>

      <nav className='navegacion'>
        <a href='/' className='clientes'>
          Usuarios
        </a>
        <a href='/patients' className='productos'>
          Pacientes
        </a>
      </nav>
    </aside>
  )
}

export default Navigation
