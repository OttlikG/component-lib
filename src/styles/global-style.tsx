import { createGlobalStyle } from 'styled-components'

import { reset } from './typography'
import icons from './icons'
import fonts from './fonts'

const GlobalStyle = createGlobalStyle`
${reset}
${icons}
${fonts}

body {
    font-size: 1em;
    font-family: 'poppins', sans-serif;
    -webkit-font-smoothing: antialiased;
    text-rendering: optimalizeLegibility;
}
`;

export default GlobalStyle;
