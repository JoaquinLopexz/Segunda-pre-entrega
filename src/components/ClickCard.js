import React from 'react'
import { useParams } from 'react-router-dom'
import Card from './Card'


export const ClickCard = ({ items }) => {
  const { cardId } = useParams();
  const ClickCard = items.find((card) => console.log(card))

  console.log("FIND: ", ClickCard)
    return (
    <div>
        <Card  items={ClickCard} />
    </div>
  )
}

export default ClickCard 