/// <reference types="styled-components/cssprop" />

import React from 'react';
import ReactDOM from 'react-dom';

import './index.css';
import Home from './Home';

import './styles/webfonts/inspiro-icons.ttf'
import './styles/webfonts/inspiro-icons.woff'

export { default as Header } from './component/header/header'

ReactDOM.render(<Home />, document.getElementById('root'));
