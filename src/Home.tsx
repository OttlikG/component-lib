import React from 'react';
import BreadCrumb from './atoms/bread-crumb/bread-crumb';
import GlobalStyle from './styles/global-style';
import { ThemeProvider } from 'styled-components';
import themeVariables from './styles/theme-variables';

const list = [
  { href: '#/alma', name: 'alma' },
  { href: '#/korte', name: 'korte' },
  { href: '#cseresznye', name: 'cseresznye' },
];

function Home() {
  return (
    <div className="body-inner">
      <GlobalStyle />
      <ThemeProvider theme={themeVariables}>
        <BreadCrumb list={list} />
      </ThemeProvider>
    </div>
  );
}

export default Home;
