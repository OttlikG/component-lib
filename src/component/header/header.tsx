import React, { useState } from 'react'
import styled from 'styled-components'
import SearchOverlay from '../../layout/search/search-overlay'
import Icon from '../../atoms/icon/icon'
import LanguageSelector from '../language-selector/language-selector'

const Header = styled.header`
    position: relative;
    width: 100%;
    z-index: 199 !important;
    height: 80px;
    line-height: 80px;
`

const HeaderInner = styled.div`
    height: 80px;
    background-color: #fff;
    left: 0;
    right: 0;
    transition: all 4s ease-in-out;
`

const Container = styled.div`
    position: relative;

    max-width: 100%;
    padding: 0 30px;
`

const Logo = styled.div`
    float: left;
    font-size: 28px;
    position: relative;
    z-index: 1;
    transition: all 1s ease-in-out;
    height: 80px;
`

const LogoA = styled.a`
    font-family: 'monospace', sans-serif;
    font-size: 40px;
    color: #1f1f1f;
    font-weight: 800;
    letter-spacing: 1.5px;
`

const LogoSpan = styled.span`
    display: block;
    font-family: 'poppins', sans-serif;
    font-size: 40px;
    color: #1f1f1f;
    font-weight: 800;
    letter-spacing: 1.5px;
`

const LogoSpanClosed = styled(LogoSpan)`
    display: none;
`

const HeaderExtras = styled.div`
    float: right;
    z-index: 199;
    position: relative;
    height: 80px;
`

const HeaderExtrasUl = styled.ul`
    list-style: none;
    margin: 0;
    padding: 0;
`

const HeaderExtrasLi = styled.li`
    float: left;
    border: 0;
`

const HeaderExtrasA = styled.a`
    font-family: poppins,sans-serif;
    font-size: 12px;
    position: relative;
    display: block;
    font-style: normal;
    text-transform: uppercase;
    font-weight: 700;

    padding-left: 6px;
    padding-right: 6px;
`

const MainMenu = styled.div`
    padding: 0;
`

const MainMenuContainer = styled.div`
    max-width: 100%;
    padding: 0;
    position: relative;
`
const Nav = styled.nav`
    float: right;
`

const MainMenuUl = styled.ul`
    list-style: none;
    padding: 0px;
    margin: 0px;
`

const MainMenuLi = styled.li`
    float: left;
    border: 0;
    transition: all .3s ease;
    margin-left: 6px;
    position: relative;
`

const MainMenuLink = styled.a`
    position: relative;
    font-family: poppins,sans-serif;
    padding: 10px 12px;
    text-transform: uppercase;
    font-size: 12px;
    font-weight: 600;
    letter-spacing: .6px;
    color: #000;
    border-radius: 0;
    border-width: 0;
    border-style: solid;
    border-color: transparent;
    transition: all .3s ease;
    line-height: normal;
`

export default function HeaderComponent() {
    const [isSearchClicked, setIsSearchClicked] = useState(false)
    return (
        <Header id="header" data-fullwidth="true" className="">
            <HeaderInner className="header-inner">
                <Container className="container">
                    <Logo id="logo">
                        <LogoA href="index.html">
                            <LogoSpan className="logo-default">POLO</LogoSpan>
                            <LogoSpanClosed className="logo-dark">POLO</LogoSpanClosed>
                        </LogoA>
                    </Logo>

                    <SearchOverlay isSearchOverlayOpen={isSearchClicked} setIsSearchClicked={setIsSearchClicked} />

                    <HeaderExtras className="header-extras">
                        <HeaderExtrasUl>
                            <HeaderExtrasLi>
                                <HeaderExtrasA id="btn-search" href="#">
                                    <Icon iconName='search' onClickHandler={() => setIsSearchClicked(true)} />
                                </HeaderExtrasA>
                            </HeaderExtrasLi>
                            <HeaderExtrasLi>
                                <LanguageSelector />
                            </HeaderExtrasLi>
                        </HeaderExtrasUl>
                    </HeaderExtras>

                    <div id="mainMenu-trigger">
                        <a className="lines-button x"><span className="lines"></span></a>
                    </div>

                    <MainMenu id="mainMenu">
                        <MainMenuContainer className="container">
                            <Nav>
                                <MainMenuUl>
                                    <MainMenuLi><MainMenuLink href="index.html">Home</MainMenuLink></MainMenuLi>
                                    <MainMenuLi><MainMenuLink href="index.html">Layout</MainMenuLink></MainMenuLi>
                                    <MainMenuLi><MainMenuLink href="index.html">Features</MainMenuLink></MainMenuLi>
                                </MainMenuUl>
                            </Nav>
                        </MainMenuContainer>
                    </MainMenu>
                </Container>
            </HeaderInner>
        </Header>
    )
}