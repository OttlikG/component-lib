import React from 'react'
import styled from 'styled-components'

interface BreadCrumbElement {
    name: string,
    href: string
}

interface BreadCrumbProps {
    list: BreadCrumbElement[],
    float?: string
}

const BreadCrumbWrapper = styled.div<{ float: string }>`
    display: flex;
    flex-wrap: wrap;
    padding: .75rem, 1rem;
    list-style: none;
    border-radius: .25rem;

    float: ${props => props.float}

    background: transparent;
    font-size: 13px;
    font-weight: 400;
    letter-spacing: 0.5px;
    margin-bottom: 10px;
    display: block;
`

const BreadCrumbList = styled.ul`
    display: inline;
    margin: 0;
    padding: 0;
`

const BreadCrumbItem = styled.li`
    display: inline;
    position: relative;
    opacity: .8;

    + li:before {
       content: '\\e930';
       font-family: ${props => props.theme.fontIcon};
       margin: 0 5px;
       background-color: transparent;
       position: relative;
       top: 1px;
   };

   &:hover, &.active, &:last-child {
       opacity: 1;
   }

   a:active {
       color: rgb(34, 80, 252)
   }
`

const BreadCrumbItemA = styled.a`
    color: ${props => props.theme.colorBody};

    &:not(.btn):not(.badge):hover,
    &:not(.btn):not(.badge):focus,
    &:not(.btn):not(.badge):active {
        text-decoration: none;
        outline: none;
        color: #2250fc;
    }
`

const Test = styled.section`
   float: ${props => props.float}
`

export default function BreadCrumb(props: BreadCrumbProps) {
    const { list, float } = props
    return (
        <BreadCrumbWrapper float='left'>
            <BreadCrumbList>
            <section customAttribute="test"></section>
                <Test customAttribute='test'></Test>
                {
                    list.map(element => {
                        return (
                            <BreadCrumbItem key={element.name}>
                                <BreadCrumbItemA href={element.href}>{element.name}</BreadCrumbItemA>
                            </BreadCrumbItem>
                        )
                    })
                }
            </BreadCrumbList>
        </BreadCrumbWrapper>
    )
}
