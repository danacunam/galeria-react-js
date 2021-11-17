import React from 'react'
import PropTypes from 'prop-types'

const Form = ({handleSubmit}) => {
    return (
        <>
             <form onSubmit={handleSubmit} >
                <label className='mt-5 mb-5 ' htmlFor="buscar">Buscar:
                  <input type="text" className='w-100' name="inputText"/>{''}
                </label>
                <button type='submit' className='btn btn-secondary rounded mx-3'><span className="material-icons p-0  ">search</span></button> 
                
0           </form>
        </>
    )
}

Form.propTypes = {
    handleSubmit : PropTypes.func,
}

export default Form
