import React from 'react'
import {NavLink} from 'react-router-dom'

export const Nav = () => {
  return (
    <div>
       <nav className="nav">
            <ul>
                <li><NavLink to="/">Inicio</NavLink></li>
                <li><NavLink to="/Articulos">Articulos</NavLink></li>
                <li><NavLink to="/crear">Crear</NavLink></li>
            </ul>
        </nav>

    </div>
  )
}
