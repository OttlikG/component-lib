import React from 'react'

export default ({ children }) => {
    return (
        <div style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100vh'
        }}>
            { children }
        </div>
    )
}