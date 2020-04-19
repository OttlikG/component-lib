import React from 'react';
import styled from 'styled-components'
import 'styled-components/macro';

const TopMenu = styled.ul`
    list-styled: outside none none;
    margin: 0;
    padding: 0;
    float: left;
`

const TopMenuLi = styled.li`
    display: inline-block;
    line: 40px;
    line-height: 40px;
`

const TopMenuA = styled.a`
    color: #484848;
    display: block;
    font-size: 12px;
    font-weight: 500;
    height: 40px;
    margin-right: 16px;
`

const SocialIcons = styled.div`
    float: right;
    height: 100%;
    overflow: hidden;
`

const SocialIconsUl = styled.ul`
    padding: 0;
    margin: 0;
`
const SocialIconsLi = styled.li`
    float: left;
    list-style: outside none none;

    & :hover i {
        animation: toTopFromBottom 0.3s forwards;
    }

    @keyframes toTopFromBottom {
        49% {
            transform: translateY(-100%);
        }

        50% {
            opacity: 0;
            transform: translateY(100%);
        }

        51% {
            opacity: 1;
        }
    }
`

const SocialIconsA = styled.a`
    border-radius: 0;
    font-size: 15px;
    height: 40px;
    line-height: 40px;
    text-align: center;
    width: 35px;
    overflow: hidden;
    margin: 0;

    float: left;
    list-style: outside none none;

    border: 0;
    background: 0 0;
    color: #333;
`

const SocialIconsFacebook = styled(SocialIconsA)`
    & :hover {
        background-color: #5d82d1;
    }
`
const SocialIconsTwitter = styled(SocialIconsA)`
    & :hover {
        background-color: #40bff5;
    }
`
const SocialIconsGoogle = styled(SocialIconsA)`
    & :hover {
        background-color: #eb5e4c;
    }
`
const SocialIconsPinterest = styled(SocialIconsA)`
    & :hover {
        background-color: #e13138;
    }
`
// const SocialIconsFacebook = styled(SocialIconsA)`
//     & :hover {
//         background-color: #5d82d1;
//     }
// `
// const SocialIconsFacebook = styled(SocialIconsA)`
//     & :hover {
//         background-color: #5d82d1;
//     }
// `
// const SocialIconsFacebook = styled(SocialIconsA)`
//     & :hover {
//         background-color: #5d82d1;
//     }
// `
// const SocialIconsFacebook = styled(SocialIconsA)`
//     & :hover {
//         background-color: #5d82d1;
//     }
// `

// const SocialIconsI = styled.i`
//     & :hover {animation: toTopFromBottom 0.3s forwards;}

//     @keyframes toTopFromBottom {
//         49% {
//             transform: translateY(-100%);
//         }

//         50% {
//             opacity: 0;
//             transform: translateY(100%);
//         }

//         51% {
//             opacity: 1;
//         }
//     }
// `

export default function Topbar() {
  return (
    <div
      css={`
        display: block !important;
        position: relative;
        border-bottom: 1px solid #eee;
        z-index: 200;
        background-color: #fff;
        width: 100%;
      `}
      id="topbar"
      className="topbar-fullwidth d-none d-lg-block"
    >
      <div
        css={`
          max-width: 100%;
          padding: 0 30px;
        `}
        className="container"
      >
        <div
          css={`
            display: flex;
            flex-wrap: wrap;
            margin-right: -15px;
            margin-left: -15px;
          `}
          className="row"
        >
          <div
            css={`
              flex: 0 0 50%;
              max-width: 50%;

              position: relative;
              width: 100%;
            `}
            className="col-md-6"
          >
            <TopMenu>
              <TopMenuLi>
                <TopMenuA href="#">Phone: +1 (234) 567-890</TopMenuA>
              </TopMenuLi>
              <TopMenuLi>
                <TopMenuA href="#">Email: contact@inspiro-media.com</TopMenuA>
              </TopMenuLi>
            </TopMenu>
          </div>
          <div css={`
            display: block;
            flex: 0 0 50%;
            max-width: 50%;
          `} className="col-md-6 d-none d-sm-block">
            <SocialIcons className="social-icons social-icons-colored-hover">
              <SocialIconsUl>
                <SocialIconsLi className="social-facebook">
                  <SocialIconsFacebook href="#">
                    <i className="fab fa-facebook-f"></i>
                  </SocialIconsFacebook>
                </SocialIconsLi>
                <SocialIconsLi className="social-twitter">
                  <SocialIconsTwitter href="#">
                    <i className="fab fa-twitter"></i>
                  </SocialIconsTwitter>
                </SocialIconsLi>
                <SocialIconsLi className="social-google">
                  <SocialIconsGoogle href="#">
                    <i className="fab fa-google-plus-g"></i>
                  </SocialIconsGoogle>
                </SocialIconsLi>
                <SocialIconsLi className="social-pinterest">
                  <SocialIconsPinterest href="#">
                    <i className="fab fa-pinterest"></i>
                  </SocialIconsPinterest>
                </SocialIconsLi>
                {/* <SocialIconsLi className="social-vimeo">
                  <a href="#">
                    <i className="fab fa-vimeo"></i>
                  </a>
                </SocialIconsLi>
                <SocialIconsLi className="social-linkedin">
                  <a href="#">
                    <i className="fab fa-linkedin"></i>
                  </a>
                </SocialIconsLi>
                <SocialIconsLi className="social-dribbble">
                  <a href="#">
                    <i className="fab fa-dribbble"></i>
                  </a>
                </SocialIconsLi>
                <SocialIconsLi className="social-youtube">
                  <a href="#">
                    <i className="fab fa-youtube"></i>
                  </a>
                </SocialIconsLi>
                <SocialIconsLi className="social-rss">
                  <a href="#">
                    <i className="fa fa-rss"></i>
                  </a>
                </SocialIconsLi> */}
              </SocialIconsUl>
            </SocialIcons>
          </div>
        </div>
      </div>
    </div>
  );
}
