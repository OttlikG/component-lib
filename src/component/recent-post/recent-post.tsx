import React from 'react'
import styled from 'styled-components'
import Icon from '../../atoms/icon/icon'

const RecentPostWidget = styled.div`
    border-bottom: 1px solid #eee;
    padding-bottom: 30px;
    margin-bottom: 30px;
    position: relative;

    & > :before {
        clear: both;
        content: " ";
        display: table;
    }
`

const Title = styled.h4`
    font-size: 14px;
    font-style: normal;
    font-weight: 600;
    text-transform: uppercase;
    line-height: 24px;
    letter-spacing: 1px;
    margin-bottom: 20px;
`

const PostThumbnailList = styled.div`
    position: relative;
`

const PostThumbnailEntry = styled.div`
    border-bottom: 1px solid #f7f9fb;
    float: left;
    margin-bottom: 16px;
    padding-bottom: 10px;
    position: relative;
    clear: both;

    &:last-child {
        margin-bottom: 0;
        padding-bottom: 0;
        border-bottom: 0;
    }
`

const ThumbnailImage = styled.img`
    height: 48px;
    margin-right: 10px;
    width: 64px;

    float: left;
    display: block;
    border-radius: 2px

    vertical-align: middle;
    border-style: none;
`

const ThumbnailContent = styled.div`
    padding-left: 72px;
`

const ThumbnailA = styled.a`
    font-size: 14px;
    font-weight: 500;
    margin: -4px 0 0;

    line-height: 20px;
    display: block;

    color: #484848;
`

const PostDate = styled.span`
    font-size: 11px;
    color: #aaa;
`

const PostCategory = styled.span`
    margin-left: 6px;
    font-size: 11px;
    color: #aaa;
`

export default function RecentPost() {
    return (
        <RecentPostWidget className="widget">
            <Title className="widget-title">Recent Posts</Title>
            <PostThumbnailList className="post-thumbnail-list">
                <PostThumbnailEntry className="post-thumbnail-entry">
                    <ThumbnailImage alt="" src="https://images.unsplash.com/photo-1587517495424-978e0364ae20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1949&q=80" />
                    <ThumbnailContent className="post-thumbnail-content">
                        <ThumbnailA href="#">A true story, that never been told!</ThumbnailA>
                        <PostDate className="post-date">
                            <Icon iconName="clock" /> 6m ago
                        </PostDate>
                        <PostCategory className="post-category">
                            <i className="fa fa-tag"></i> Technology
                        </PostCategory>
                    </ThumbnailContent>
                </PostThumbnailEntry>

                <PostThumbnailEntry className="post-thumbnail-entry">
                    <ThumbnailImage alt="" src="https://images.unsplash.com/photo-1587382559340-818aa5fc7a43?ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80" />
                    <ThumbnailContent className="post-thumbnail-content">
                        <ThumbnailA href="#">Beautiful nature, and rare feathers!</ThumbnailA>
                        <PostDate className="post-date">
                            <Icon iconName="clock" /> 24h ago
                        </PostDate>
                        <PostCategory className="post-category">
                            <i className="fa fa-tag"></i> Lifestyle
                        </PostCategory>
                    </ThumbnailContent>
                </PostThumbnailEntry>
            </PostThumbnailList>
        </RecentPostWidget>
    )
}