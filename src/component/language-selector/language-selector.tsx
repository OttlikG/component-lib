import React from 'react';
import styled from 'styled-components'
import Icon from '../../atoms/icon/icon'

const Dropdown = styled.div`
    float: left;
    font-size: 13px;
    font-weight: 400;
    position: relative;

    &:hover ul {
        opacity: 1;
        transform: scale(1);
        visibility: visible;
    }

    padding-left: 6px;
    padding-right: 6px;
    height: 80px;
    display: flex;
    align-items: center;
`

const DropdownA = styled.a`
    position: relative;
    color: #484848;
`

const DropdownSelectedLanguage = styled.span`
    position: absolute;
    top: -4px;
    right: -12px;
    opacity: 1;
    font-size: 9px;
`

const DropdownList = styled.ul`
    right: -26px;
    margin-top: -12px;

    line-height: normal;
    position: absolute;
    z-index: 5;
    text-align: left;
    opacity: 0;
    transition: all .3s ease;
    visibility: hidden;
    transform: translateY(8px);
    padding: 14px 20px;
    top: 60px;
    width: min-content;
    margin: 0;
    border-radius: 4px;
    background-color: #fff;
    border: 1px solid #e6e8eb;
    box-shadow: 0 14px 20px rgba(0,0,0,.1);
`

const DropdownLi = styled.li`
    display: block;
`

const DropdownListA = styled.a`
    line-height: 26px;
    white-space: nowrap;
    display: block;
    padding: 2px 8px;

    color: #484848;

    &:hover {
        text-decoration: none;
        outline: none;
        color: #2250fc;
    }
`

export default function LanguageSelector() {
    return (
        <Dropdown className="p-dropdown">
            <DropdownA href="#">
                <Icon iconName='globe' />
                <DropdownSelectedLanguage>EN</DropdownSelectedLanguage>
            </DropdownA>
            <DropdownList className="p-dropdown-content">
                <DropdownLi>
                    <DropdownListA href="#">French</DropdownListA>
                </DropdownLi>
                <DropdownLi>
                    <DropdownListA href="#">Spanish</DropdownListA>
                </DropdownLi>
                <DropdownLi>
                    <DropdownListA href="#">English</DropdownListA>
                </DropdownLi>
            </DropdownList>
        </Dropdown>
    );
}
