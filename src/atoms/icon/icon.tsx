import React from 'react'
import styled from 'styled-components'
import { IconProps, iconValues } from './icon.type'

const IconI = styled.i`
&:before {
    content: \'${(props: IconProps): string => iconValues[props.iconName]}';
}
`

export default function Icon(props: IconProps) {
    const { iconName, onClickHandler } = props

    if (!iconName) {
        throw Error('You must specify an icon name!')
    }

    return (
        <IconI iconName={iconName} onClick={onClickHandler} ></IconI>
    )
}
