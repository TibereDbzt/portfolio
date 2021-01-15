import styled from 'styled-components'

export const HeaderNav = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 6rem;
    padding: 0 4rem;
    z-index: 10000;

    @media (max-width: 800px) {
        padding: 0 2.5rem;
    }
`

export const Logo = styled.div`
    position: relative;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid var(--primary);
    
    > a {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        font-size: 0.68rem;
        letter-spacing: 1px;
    }
`

export const Menu = styled.nav`
    > ul {
        display: flex;

        > li > a {
            padding: 12px 12px;
            margin: 0 0.4rem;
            font-size: 0.86rem;
            font-weight: 300;
            text-transform: uppercase;
            
            /* &.hover {
                color: white;
            } */
        }
    }
    
    @media (max-width: 800px) {
        display: none;
    }
`

export const Hamburger = styled.div`
    width: 45px;
    height: 45px;
    border: 1px solid var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    
    > span {
        z-index: 100;

        &::before, &::after {
            content: '';
            display: block;
            width: 25px;
            height: 1px;
            background: var(--primary);
        }

        &::before {
            transform: translateY(-3px);
        }

        &::after {
            transform: translateY(3px);
        }
    }

    @media (min-width: 800px) {
        display: none;
    }
`

export const MobileMenu = styled.nav`
    padding: 2rem 2.5rem;
    position: absolute;
    height: 100vh;
    top: 0;
    left: 0;
    transform: translateX(-100%);
    background: white;
    transition: transform 0.2s ease;
    box-shadow: 0 5px 10px rgba(0, 0, 0, 0.2);

    &.open {
        transform: translateX(0);
    }
    
    ul {
        flex-grow: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        
        > li {
            color: var(--primary);
            text-transform: uppercase;
        
            > a {
                display: block;
                padding: 1rem;
                font-size: 1.2rem;
            }
        }
    }
`
