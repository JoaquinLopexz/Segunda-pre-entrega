import React from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'


export const ClickCard = ({equipos}) => {
  const{cardid} = useParams();
  const ClickCard= equipos.equipos.find((card) => card.id === cardid)
    return (
    <div>
        <Card  equipos={ClickCard} />
    </div>
  )
}

export default ClickCard 