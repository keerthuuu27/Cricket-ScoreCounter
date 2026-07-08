import React from 'react'

function Card(props) {
  return (
    <>
        < div className='card' style={{
            border:'1px solid grey', width:'250px',height:'300px', }}>
                
                <img src={props.image} alt={props.name} width="250px" />
                <h1>{props.name}</h1>
                <h1>{props.price}</h1>
                

        </div>
    </>
        
    
  )
}

export default Card