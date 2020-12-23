import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom'

const Button = styled.a`
    position: relative;
    display: inline-block;
    padding: 12px 25px;
    background-color: var(--primary);
    font-weight: 800;
    color: var(--primary);
    width: fit-content;
    font-size: 16px;

    &:before {
        content: '${props => props.content}';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        padding: 12px 25px;
        background-color: white;
        outline: 1px solid var(--primary);
        transform: translate(5px, -5px);
        transition: 0.2s ease;
    }

    &:hover:before {
        transform: translate(0, 0);
    }
`

export default function PrimaryButton ({content}) {
    
    return (
        <Button href="/work" content={content}>{content}</Button>
    )
}
