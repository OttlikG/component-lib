import React from 'react'
import './all.min.css'

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