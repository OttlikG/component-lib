import React from 'react'
import styled from 'styled-components'


const ReadMore = styled.a`
    color: #484848;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase !important;
`

export default () => {
    return (
        <ReadMore href="#">
            Read More
            
        </ReadMore>
    )
}