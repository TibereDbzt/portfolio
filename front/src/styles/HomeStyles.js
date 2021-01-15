import styled from 'styled-components'

export const TextBlock = styled.div`
    margin-bottom: 2rem;
`

export const Name = styled.h1`
    margin: 0;
    font-size: 6rem;
    position: relative;
    -webkit-text-stroke: 1px black;
    color: transparent;

    &:before {
        content: 'Tibère Debizet';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-1px, 2px) rotate(-1deg);
        -webkit-text-stroke: 1px black;
        z-index: -10;
    }

    &:after {
        content: 'Tibère Debizet';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(4px, 4px) rotate(0.5deg);
        -webkit-text-stroke: 1px black;
        z-index: -10;
    }
`