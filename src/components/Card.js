import React from 'react'
import {useLocation } from 'react-router-dom'
import './Card.css'


export default function Card ({ equipos }) {
  const path = useLocation().pathname;

  return (
    <div className='containerCard'>
      <img className='dj-equipos' src={equipos?.imgUrl} alt={`imagen del equipo ${equipos?.name}`}/>
      <div className='text-card'>
        <p>
          {equipos.precio}
        </p>
        
            <button id={equipos?.id}>
              Comprar
            </button>
    
      </div>
    </div>
  )
}