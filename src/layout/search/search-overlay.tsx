import React, { useState } from 'react'
import styled from 'styled-components'
import { CornerOverlayCloseButton } from '../../atoms/button/overlay-close-button'
import TypeSearch from '../../atoms/type-search/type-search'
import { SearchOverlayProps } from './search-overlay.type'
import useKeyboardEvent from '../../hooks/useKeyboardEvent'


const Search = styled.div`
    z-index: 201;
    pointer-events: auto;
    opacity: ${(props: SearchOverlayProps) => props.isOpen ? 1 : 0};

    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    background: #fff;
    line-height: normal;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    transition: opacity .5s;
`

export default function SearchOverlay () {
    const [isOpen, setIsOpen] = useState(true)
    
    useKeyboardEvent('Escape', () => {
        setIsOpen((state) => !state)
    })

    return (
        <Search isOpen={isOpen}>
            <CornerOverlayCloseButton />
            <TypeSearch />
        </Search>
    )
}