import React from 'react'
import styled from "styled-components"
import { Link, useLocation } from 'react-router-dom'
import { navEntries } from 'config'

const HeaderContainer = styled.header`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 60px;
    padding: 0 45px;
    display: flex;
    align-items: flex-end;
    z-index: 100;
    justify-content: space-between;
`

const LogoContainer = styled.div`
    padding: 6px 20px 6px 6px;
    background-color: var(--primary);
    position: relative;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;

    > a {
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
    }
    
    > span {
        font-size: 13px;
        font-weight: 900;
        display: block;
        line-height: 12px;
        color: white;
        letter-spacing: -2px;
        font-style: italic;
    }
`

const Menu = styled.nav`
`

const ListEntries = styled.ol`
    display: flex;
    align-items: flex-end;
    counter-reset: item;
`

const Entrie = styled.li`
    position: relative;
    display: inline;
    margin: 0 12px;
    font-size: 12px;
    background-color: white;
    color: var(--primary);
    border: 1px solid var(--primary);
    position: relative;
    padding: 4px 8px 4px 0;
    text-transform: uppercase;

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

export default function Header() {

    const location = useLocation();
    const isHomePage = location.pathname === '/' ? true : false;
    
    return (
        <HeaderContainer className={isHomePage ? "onlyNav" : ""}>
            {!isHomePage &&
                <LogoContainer>
                    <Link to="/"></Link>
                    <span>BACK</span>
                    <span>TO</span>
                    <span>HOME</span>
                </LogoContainer>
            }
            <Menu>
                {navEntries && (
                    <ListEntries>
                        {navEntries.map(({id, url, name}) => (
                            <Entrie key={id}>
                                <Link to={url}></Link>
                                {name}
                            </Entrie>
                        ))}
                    </ListEntries>
                )}
            </Menu>
        </HeaderContainer>
    )
}
