import inspiroIconTtf from './webfonts/inspiro-icons.ttf';
import inspiroIconWof from './webfonts/inspiro-icons.woff';

export default `
@font-face {
    font-family: 'inspiro-icons';
    src:
        url('${inspiroIconTtf}') format('truetype'),
        url('${inspiroIconWof}') format('woff');
    font-weight: normalt;
    font-style: normal;
    font-display: block;
};

i:not(.fa):not(.fab):not(.far):not(.fas) {
    font-family: 'inspiro-icons' !important;
    font-style: normal;
    font-weight: 400;
    font-variant: normal;
    text-transform: none;
    line-height: 1;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
};
`
