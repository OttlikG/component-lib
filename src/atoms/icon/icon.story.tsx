import React from 'react'
import { withKnobs, text } from '@storybook/addon-knobs'

import Icon from './icon'

export default {
    title: 'Atom/Icon',
    decorators: [withKnobs]
}

export const basic = () => <Icon iconName={text('Icon Name', 'chevron-right')} />
