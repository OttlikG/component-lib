import React from 'react'
import styled from 'styled-components'
import Icon from '../icon/icon'

const ReadMoreA = styled.a`
    position: relative;
    color: #484848;
    font-size: 12px;
    letter-spacing: 1px;
    text-transform: uppercase !important;

    i:before {
        text-decoration: none;
        outline: none;
    }

    i {
        position: relative;
        transition: right .3s ease 0s;
        right: -5px;
    }

    &:hover i {
        right: -13px;
    }
`

export const ReadMore = () => {
    return (
        <ReadMoreA href="#">
            Read More
            <Icon iconName='chevron-right' />
        </ReadMoreA>
    )
}