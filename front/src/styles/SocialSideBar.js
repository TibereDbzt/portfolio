import styled from 'styled-components'

export const SideBar = styled.address`
    position: fixed;
    bottom: 0;
    left: 4rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    z-index: 10;

    @media (max-width: 1200px) {
        left: 30px;
    }

    @media (max-width: 800px) {
        display: none;
    }
`

export const SocialLink = styled.a`

    > svg > path {
        fill: var(--primary);
        transition: fill 0.2s;
    }

    &:hover {
        
        > svg > path {
            fill: var(--grey);
        }
    }
`

export const Line = styled.span`
    display: block;
    width: 1px;
    height: 70px;
    background-color: var(--primary);
    margin-top: 8px;
`
