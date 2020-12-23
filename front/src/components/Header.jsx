import React, { useState, useEffect } from 'react'
import styled from "styled-components"
import { Link, useLocation } from 'react-router-dom'
import { navEntries } from 'config'
import { motion } from 'framer-motion'

const transition = { duration: 0.6, ease: [0.6, 0.01, -0.05, 0.9] }
const fastEase = { duration: 0.6, ease: [0.05, 0.94, 0.38, 0.95] }

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 140px;
    padding: 0 45px;
    display: flex;
    align-items: center;
    z-index: 100;
    justify-content: space-between;

    @media (max-width: 700px) {
        background-color: white;
        align-items: center;
        padding: 20px 25px;
    }
`

const HomeButton = styled(motion.button)`
    position: relative;
    width: 55px;
    height: 55px;
    border-radius: 50%;
    background-color: transparent;
    border: 1px solid var(--primary);
    font-size: 11px;
    letter-spacing: 1px;
    padding:0;

    > a {
        position: absolute;
        top: 0;
        left: 0;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;

        &.hover {
            color: white;
        }
    }
`

const Menu = styled.nav`
    @media (max-width: 700px) {
        display: none;
    }
`

const MenuV2 = styled(motion.nav)`
    
    > ul {
        display: flex;
        
        > li {

            a {
                padding: 12px 12px;
                text-transform: uppercase;
                font-size: 0.9rem;
                font-weight: 300;

                &.hover {
                    color: white;
                }
            }
        }
    }
`

const ListEntries = styled.ol`
    display: flex;
    align-items: flex-end;
    counter-reset: item;
`

const Entrie = styled(motion.li)`
    position: relative;
    display: inline;
    margin: 0 12px;
    font-size: 12px;
    background-color: white;
    color: var(--primary);
    border: 1px solid var(--primary);
    padding: 4px 8px 4px 0;
    text-transform: uppercase;
    box-shadow: 0 0px 10px rgba(0, 0, 0, 0.35);

    :before {
        padding: 4px 3px 4px 6px;
        margin-right: 8px;
        counter-increment: item;
        content: counter(item, decimal-leading-zero) "/ ";
        color: white;
        background-color: var(--primary);
    }

    > a {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
`

const SideBar = styled.aside`
    position: absolute;
    right: 0;
    top: 0;
    transform: translateX(${props => (props.menuOpen ? 0 : 100)}vw);
    transition: transform 0.3s;
`

const MobileMenu = styled.nav`
    display: none;
    align-items: center;
    padding: 50px;
    height: 100vh;
    background-color: white;
    box-shadow: -10px 0 30px rgba(0, 0, 0, 0.3);

    @media (max-width: 700px) {
        display: flex;
    }

    ol {
        flex-direction: column;
        align-items: flex-start;

        > .mobileEntrie {
            margin: 24px 0;
            font-size: 18px;
            width: 100%;
            display: flex;
            align-items: center;
            padding: 0 14px 0 0;
            box-shadow: unset;

            :before {
                padding: 8px;
                margin-right: 14px;
            }
        }
    }
`

const Hamburger = styled.button `
    padding: 12px;
    background-color: transparent;
    border: none;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    z-index: 100;

    @media (min-width: 700px) {
        display: none;
    }

    > .burgerBar {
        display: block;
        content: '';
        width: 30px;
        height: 2px;
        background-color: var(--primary);
        margin: 5px;
        transition: transform 0.3s;

        &.top {
            transform: translateY(${props => (props.menuOpen ? 6 : 0)}px);
        }

        &.bottom {
            transform: translateY(${props => (props.menuOpen ? -6 : 0)}px);
        }
    }
`

export default function Header() {

    const location = useLocation();
    const isHomePage = location.pathname === '/' ? true : false;

    const [menuOpen, setMenuOpen] = useState(false);
    const toggleMenu = () => setMenuOpen(!menuOpen);

    const onResize = e => {
        if (e.currentTarget.innerWidth > 700) {
          setMenuOpen(false);
        }
    };

    useEffect(() => {
        window.addEventListener('resize', onResize);

        return () => {
            window.removeEventListener('resize', onResize);
        };
    }, []);
    
    return (
        <HeaderContainer className={isHomePage ? "onlyNav" : ""}>
            {!isHomePage &&
                <HomeButton
                    whileHover={{ scale: 1.1, duration: 0.8 }}
                    transition={transition}
                >
                    <Link to="/"><span>HOME</span></Link>
                </HomeButton>
            }
            {/* <Menu>
                {navEntries && (
                    <ListEntries>
                        {navEntries.map(({id, url, name}) => (
                            <Entrie
                            whileTap={{
                                scale: 1.2
                            }}
                            key={id}>
                                <Link to={url}></Link>
                                {name}
                            </Entrie>
                        ))}
                    </ListEntries>
                )}
            </Menu> */}
            <MenuV2>
                {navEntries && (
                    <ul>
                        {navEntries.map(({id, url, name}) => (
                            <li
                            // whileTap={{
                            //     scale: 1.2
                            // }}
                            key={id}>
                                <Link to={url}><span>{name}</span></Link>
                            </li>
                        ))}
                    </ul>
                )}
            </MenuV2>
            <Hamburger onClick={toggleMenu} menuOpen={menuOpen}>
                <span className="burgerBar top"></span>
                <span className="burgerBar bottom"></span>
            </Hamburger>
            <SideBar menuOpen={menuOpen}>
                <MobileMenu>
                    {navEntries && (
                        <ListEntries>
                            {navEntries.map(({id, url, name}) => (
                                <Entrie key={id} className="mobileEntrie">
                                    <Link to={url}></Link>
                                    {name}
                                </Entrie>
                            ))}
                        </ListEntries>
                    )}
                </MobileMenu>
            </SideBar>
        </HeaderContainer>
    )
}
