import React from 'react'
import { addDecorator } from '@storybook/react'
import { ThemeProvider } from 'styled-components'

import Center from './center'
import MainTheme from '../src/styles/theme-variables'
import GlobalStyle from '../src/styles/global-style'

addDecorator(storyFn => (
    <Center>
        <ThemeProvider theme={MainTheme}>
            <GlobalStyle />
            {storyFn()}
        </ThemeProvider>
    </Center>
))
