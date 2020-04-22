import React from 'react'
import styled from 'styled-components'

const WidgetTweet = styled.div`
    border-bottom: 1px solid #eee;
    margin-bottom: 30px;
    padding-bottom: 30px;

    max-width: 300px;
    min-height: 248px;
    position: relative;

    & > :before {
        clear: both;
        content: " ";
        display: table;
    }
`

const TweetTitle = styled.h4`
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 24px;
    letter-spacing: 1px;
    margin-bottom: 20px;
`

const TweetUl = styled.ul`
    list-style: none;
    padding-left: 22px;
    margin-bottom: 0px;
    margin-top: 0px;
`

const TweetLi = styled.li`
    font-style: normal;
    font-variant: normal;
    text-rendering: auto;
    -webkit-font-smoothing: antialiased;

    line-height: 1.66;
    margin-bottom: 20px;
    box-sizing: border-box;

    &:before {
        margin-left: -22px;
        position: absolute;
        font-family: "font awesome 5 brands";
        content: "\f099";
    }
}
`

const TweetA = styled.a`
    color: #484848;
`

const TweetSmall = styled.small`
    display: block;
    color: #9896a6!important;
    width: 100%;
    margin-top: 10px;

    font-size: 80%;
    font-weight: 400;
`

export default function RecentTwitter() {
  return (
    <WidgetTweet
      className="widget widget-tweeter"
      data-username="envato"
      data-limit="2"
    >
      <TweetTitle className="widget-title">Recent Tweets</TweetTitle>
      <div id="twitter-cnt">
        <TweetUl>
          <TweetLi>
            Well color me happy! Missed our color trends article? Get
            ready to brighten things up with our round up video:…{' '}
            <a
              href="https://t.co/4gbzlvBkqY"
              target="_blank"
              title="Visit this link"
            >
              https://t.co/4gbzlvBkqY
            </a>
            <TweetSmall>Apr/8/2020</TweetSmall>
          </TweetLi>
          <TweetLi>
            Arguably one of the most diverse types of design, Daisy
            Ein explores the world of poster design:…{' '}
            <a
              href="https://t.co/W4BQNnnnkX"
              target="_blank"
              title="Visit this link"
            >
              https://t.co/W4BQNnnnkX
            </a>
            <TweetSmall>Apr/6/2020</TweetSmall>
          </TweetLi>
        </TweetUl>
      </div>
    </WidgetTweet>
  );
}
