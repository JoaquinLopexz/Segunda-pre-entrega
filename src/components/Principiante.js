import React from 'react'



const Principiante = ({items}) => {
    let ItemFiltrado = []
    return (
        <div className='prin-container'>
    {
     ItemFiltrado = items.filter(item => item.category === 'Principiante')
        


        
    }


        </div>
        
    )
}

export default Principiante