import React from 'react'
import PropTypes from 'prop-types'

const Card = ({imagen}) => {
    return (
        
        <div className="card mt-2" >
            
             <img src={imagen} alt="imagen traida" />
         </div> 
    )
}

Card.propTypes = {
    imagen: PropTypes.string,
}

export default Card
