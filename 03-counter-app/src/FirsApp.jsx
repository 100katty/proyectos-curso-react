import React from 'react'
import PropTypes from 'prop-types';

export const FirsApp = ({
    title,
    subtitle 
}) => {
    

    return (
        <>
            <h1>{title} </h1>
            <p>{subtitle} </p>
        </>
      
  )
}
FirsApp.propTypes = {
    title: PropTypes.string.isRequired,
    subtitle:  PropTypes.number.isRequired
}
FirsApp.defaultProps = {
    title: 'No hay titulo',
    subtitle:'No hay subtitle'
}