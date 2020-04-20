import React from 'react'
import styled from 'styled-components'

import Icon from '../icon/icon'

const Button = styled.a`
    display: block;
    opacity: 1;
    transform: scale3d(1, 1, 1);

    font-size: 20px;
    position: absolute;
    // top: 20px;
    // right: 30px;
    padding: 12px;
    line-height: 12px;
    background-color: #2250fc;
    border: 0;
    cursor: pointer;
    border-radius: 5px;
    color: #fff;
    transition: opacity .5s, transform .5s
`

export default function OverlayCloseButton () {
    return (
        <Button aria-label="Close search form">
            <Icon iconName='x' />
        </Button>
    )
}