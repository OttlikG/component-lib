import React from 'react'
import styled from 'styled-components'
import SearchOverlay from '../../layout/search/search-overlay'

const Header = styled.header`
    position: relative;
    with: 100%;
    z-index: 199 !important;
    height: 80px;
    line-height: 80px;
`

const HeaderInner = styled.div`
    height: 80px;
    background-color: #fff;
    left: 0;
    right: 0;
    transition: all 4s ease-in-out
`

const Container = styled.div`
    position: relative;

    max-width: 100%
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

export default function HeaderComponent() {
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

                    <SearchOverlay />

                    <div className="header-extras">
                        <ul>
                            <li>
                                <a id="btn-search" href="#"> <i className="icon-search"></i></a>
                            </li>
                            <li>
                                <div className="p-dropdown">
                                    <a href="#"><i className="icon-globe"></i><span>EN</span></a>
                                    <ul className="p-dropdown-content">
                                        <li><LogoA href="#">French</LogoA></li>
                                        <li><a className="test-poppins" href="#">French</a></li>
                                        <li><a href="#">English</a></li>
                                    </ul>
                                </div>
                            </li>
                        </ul>
                    </div>

                    <div id="mainMenu-trigger">
                        <a className="lines-button x"><span className="lines"></span></a>
                    </div>

                    <div id="mainMenu">
                        <div className="container">
                            <nav>
                                <ul>
                                    <li><a href="index.html">Home</a></li>
                                </ul>
                            </nav>
                        </div>
                    </div>

                </Container>
            </HeaderInner>
        </Header>
    )
}