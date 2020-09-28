import React from 'react'

const Country = ({name, flag}) => {
    const flagStyl = {
        width: '100px',
        height: '100px',
        objectFit: 'cover'
    }
    return (
        <div>
            <p>{name}</p>
            <img style={flagStyl} src={flag} alt={name}/>
        </div>
    )
}

export default Country