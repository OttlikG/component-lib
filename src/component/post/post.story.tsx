import React from 'react'
import styled from 'styled-components/macro'
import Post from './post'

export default {
    title: 'Component/Post'
}

export const basic = () => <div css={`width: 660px`}>
        <Post type="basic" />
    </div>