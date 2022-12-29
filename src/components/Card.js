import React from 'react'
import { Link, useLocation } from 'react-router-dom'



export default function Card ({ equipos }) {
  const path = useLocation().pathname;

  return (
    <div>
      <img className='dj-equipos' src={equipos?.imgUrl} alt={`imagen del equipo ${equipos?.name}`}/>
      <div className='text-card'>
        <p>
          {equipos.data}{equipos.price}
        </p>
        {path === "/" ? (
          <Link to={`comprar/${equipos?.id}`}>
            <button id={equipos?.id}>
              Comprar
            </button>
          </Link>
        ) :( 

          <button>Efectuar Compra</button>
          )}
        

      </div>
    </div>
  )
}