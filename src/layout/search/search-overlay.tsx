import React, { useState } from 'react'
import styled from 'styled-components'
import { CornerOverlayCloseButton } from '../../atoms/button/overlay-close-button'
import TypeSearch from '../../atoms/type-search/type-search'
import { SearchProps, SearchOverlayProps } from './search-overlay.type'
import useKeyboardEvent from '../../hooks/useKeyboardEvent'


const Search = styled.div`
    z-index: 201;
    pointer-events: auto;

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

    // Hide search content
    opacity: ${(props: SearchProps) => props.isOpen ? 1 : 0};
    height: ${(props: SearchProps) => props.isOpen ? 'auto' : 0};
    overflow: ${(props: SearchProps) => props.isOpen ? 'auto' : 'hidden'};
`

export default function SearchOverlay (props: SearchOverlayProps) {
    const { isSearchOverlayOpen = false } = props;
    const [isOpen, setIsOpen] = useState(isSearchOverlayOpen)
    
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