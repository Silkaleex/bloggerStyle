import React from 'react'
import { Link } from 'react-router-dom'

export const Inicio = () => {
  return (
    <div className='jumbo'>
      <h1>Bienvenido a BlogerStyle</h1>
      <p>Aqui podras crear tu Articulo a tu gusto sin Complejos</p>
      <Link to="/articulos" className='btn-articulos'>Ver los Articulos</Link>
    </div>
  )
}
