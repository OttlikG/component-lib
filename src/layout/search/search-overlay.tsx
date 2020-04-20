import React from 'react'
import styled from 'styled-components'
import Test, { CornerOverlayCloseButton } from '../../atoms/button/overlay-close-button'
import TypeSearch from '../../atoms/type-search/type-search'

const Search = styled.div`
    z-index: 201;
    pointer-events: auto;
    opacity: 1;

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
    return (
        <Search>
            <CornerOverlayCloseButton />
            <TypeSearch />
        </Search>
    )
}