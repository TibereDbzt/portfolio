import styled, { css } from 'styled-components'

export const Flex = styled.div`
    position: relative;
    display: flex;
    align-items: center;
    width: 100%;
    height: 100%;

    ${props =>
        props.spaceBetween &&
        css`
            justify-content: space-between;
    `}
    
    ${props =>
        props.flexEnd &&
        css`
            justify-content: flex-end;
    `}

    ${props =>
        props.column &&
        css`
            flex-direction: column;
            justify-content: center;
            align-items: flex-start;
    `}

    ${props =>
        props.columnBetween &&
        css`
            flex-direction: column;
            justify-content: space-between;
    `}
`

export const Wrapper = styled.div`
    position: relative;
    display: flex;
    flex-direction: column;
    width: 100%;
    max-width: 1800px;
    margin: 0 auto;
    height: 100%;
    min-height: 100vh;
`

export const Content = styled.main`
    flex-grow: 1;
    position: relative;
    width: 100%;
    height: 100%;
    padding: 0 12rem;
    display: flex;
    flex-direction: column;
    margin-top : 6rem;

    @media (max-width: 1200px) {
        padding: 0 6rem;
    }

    @media (max-width: 800px) {
        padding: 0 3rem;
    }

    @media (max-width: 500px) {
        padding: 0 1.5rem;
    }
    
    ${props =>
        props.centered &&
        css`
            justify-content: center;
            margin-top: 0;
        `
    }
    @media (max-width: 1000px) {
                margin-top: 6rem;
            }
`
