// import poppinsMedium from './webfonts/Poppins-Medium.ttf'
const poppinsMedium = require('./webfonts/Poppins-Medium.ttf')

// TODO: fix Poppins font import
export default `
@import 'https://fonts.googleapis.com/css?family=Poppins:100,200,400,500,600,700,800|Nunito:300,400,600,700,800';

@font-face {
    font-family: 'Poppins';
    font-style: normal;
    font-weight: 100;
    src: url('${poppinsMedium}') format('woff2');
    unicode-range: U+0100-024F, U+0259, U+1E00-1EFF, U+2020, U+20A0-20AB, U+20AD-20CF, U+2113, U+2C60-2C7F, U+A720-A7FF;
}
`
