import React from 'react'
import styled from 'styled-components'
import icons from '../../styles/icons'
import { IconProps, iconValues } from './icon.type'

const IconI = styled.i`
&:before {
    content: \'${(props: IconProps) => iconValues[props.iconName]}';
}
`

export default function Icon(props: IconProps) {
    const { iconName } = props

    if (!iconName) {
        throw Error('You must specify an icon name!')
    }

    return (
        <IconI iconName={iconName}></IconI>
    )
}
