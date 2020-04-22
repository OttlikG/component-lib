import React from 'react'
import SearchOverlay from './search-overlay'

export default {
    title: 'Layout/SearchOverlay'
}

const nope = () => {}
export const basic = () => <SearchOverlay isSearchOverlayOpen setIsSearchClicked={nope} />