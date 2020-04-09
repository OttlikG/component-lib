import React from 'react'
import styled from 'styled-components/macro'

import { ReadMore } from '../../atoms/button/button'

interface PostProps {
    type: string
}

export default function Post(props: PostProps) {
    const { type } = props;
    return (
        <div className="post-item" css={`
            width: 100%;
            height: auto;
            padding: 0 0 20px;
        `}>
            <div className="post-item-wrap">
                <div className="post-image" css={`
                    position: relative;
                    margin: 0;
                    padding: 0;
                `}>
                    <a href="#">
                        <img alt="" src="https://images.unsplash.com/photo-1542435503-956c469947f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2534&q=80&w=660&h=440" />
                    </a>
                    <span className="post-meta-category"
                        css={`
                            background-color: rgb(34, 80, 252);
                            color: rgb(255, 255, 255);
                            font-size: 13px;
                            position: absolute;
                            right: 10px;
                            top: 11px;
                            z-index: 3;
                            margin-right: 0px;
                            padding: 2px 16px;
                            border-radius: 50px;

                            & a {
                                color: rgb(255, 255, 255);
                            }
                        `}
                    ><a href="">Lifestyle</a></span>
                </div>
                <div className="post-item-description" css={`
                    line-height: 28px;
                    color: rgb(103, 103, 103);
                    padding: 24px;
                `}>
                    <span className="post-meta-date" css={`
                        color: rgb(194, 194, 194);
                        position: relative;
                        top: -4px;
                        font-size: 12px;
                        margin-right: 8px;
                    `}>
                        <i className="fa fa-calendar-o"></i>Jan 21, 2017
                    </span>
                    <span className="post-meta-comments" css={`
                        color: rgb(194, 194, 194);
                        position: relative;
                        top: -4px;
                        font-size: 12px;
                        margin-right: 8px;
                    `}>
                        <a href=""><i className="fa fa-comments-o"></i>33 Comments</a>
                    </span>
                    <h2 css={`
                        font-size: 18px;
                        letter-spacing: -0.1px;
                        line-height: 23px;
                        margin-bottom: 16px;
                        color: rgb(68, 68, 68);
                        font-weight: 600;
                    `}>
                        <a href="#" css={`
                            &:hover {
                                // color: rgb(34, 80, 252)
                            }
                        `}>Standard post with a single image</a>
                    </h2>
                    <p>Curabitur pulvinar euismod ante, ac sagittis ante posuere ac. Vivamus luctus commodo dolor porta feugiat. Fusce at velit id ligula pharetra laoreet.</p>
                    <ReadMore />
                </div>
            </div>
        </div>
    )
}
