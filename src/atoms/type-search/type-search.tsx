import React from 'react'
import styled from 'styled-components'

const Form = styled.form`
    opacity: 1;
    transform: scale3d(1, 1, 1);

    transition: opacity .5s, translate .5s;
    margin: 80px 0;
    font-family: 'Poppins', sans-serif;
`

const Input = styled.input`
    font-family: 'Poppins', sans-serif;
    border: none;
    border-radius: 0;
    border-bottom: 2px solid #cecece;
    font-size: 34px;
    padding: 10px 0;
    font-weight: 700;
    margin-bottom: 20px;
    background-color: transparent;

    line-height: 18px;
    min-height: 40px;

    display: block;
    width: 100%;
    height: calc(1.5em + .75rem + 2px);
    color: #495057;
`

const TextMuted = styled.span`
    display: flex;
    justify-content: center;
    font-family: 'Poppins', sans-serif;
    opacity: .4;
    color: #6c757d;
    text-align: center;
`

export default function TypeSearch () {
    return (
        <Form>
            <Input name="q" type="text" placeholder="Type &amp; Search..." />
            <TextMuted>Start typing &amp; press "Enter" or "ESC" to close</TextMuted>
        </Form>
    )
}