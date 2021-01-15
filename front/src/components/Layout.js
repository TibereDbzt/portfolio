import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

// styles
import { createGlobalStyle } from 'styled-components'
import { Wrapper } from 'styles/RepeatedStyles'

// pages
import Home from 'pages/Home'
import About from 'pages/About'
import Works from 'pages/Works'
import Contact from 'pages/Contact'

// components
import LerpStickyCursor from './LerpStickyCursor'
import Header from './Header'
import SocialSideBar from './SocialSideBar'
import Cursor from './Cursor'

const GlobalStyle = createGlobalStyle`

    :root {
        --primary: #292929;
        --grey: #5a5a5a;
        --green: #61c284;
    }
    
    * {
        box-sizing: border-box;
        ${'' /* cursor: none; */}
    }

    html {
        font-size: 16px;
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
        -webkit-font-smoothing: antialiased;
    }

    @media (max-width: 800px) {
        html {
            font-size: 14px;
        }
    }

    @media (max-width: 600px) {
        html {
            font-size: 13px;
        }
    }

    /* Chrome, Safari and Opera */
    html::-webkit-scrollbar {
        display: none;
    }

    body {
        margin: 0;
        font-family: 'Roboto';
        font-weight: 400;
        overscroll-behavior-y: none;
        overflow-x: hidden;
    }

    .hashed {
        background-image: url("./assets/pixel.png");
    }

    h1 {
        font-size: 3rem;
        margin: 0.8rem 0;
    }

    h2 {
        font-size: 3.5rem;
        font-weight: 500;
    }

    h3 {
        font-size: 2rem;
    }

    h4 {
        font-size: 1.2rem;
        font-weight: 400;
        text-transform: uppercase;
        margin: 4px 0;
    }

    ul, ol {
        list-style: none;
        padding: 0;
        margin: 0;
    }

    p, li {
        font-size: 1rem;
        font-weight: 300;
        color: var(--grey);
        margin: 4px 0;
        line-height: 20px;
        letter-spacing: 0.3px;
    }

    a {
        padding: 8px;
        color: var(--primary);
        text-decoration: none;
    }

    a > span {
        display: inline-block;
        pointer-events: none;
        transition: transform 0.1s ease;
        ${'' /* mix-blend-mode: difference; */}
    }

    a:hover > span {
        ${'' /* color: white; */}
        ${'' /* transform : translate(0, 20%); */}
        /* transition: transform 0.2s ease */
    }

    button {
        padding: 0
    }

    .sectionHeader {
        margin-bottom: 2rem;
    }
    
`

const Layout = () => {

    // document.addEventListener('DOMContentLoaded', () => {
    //     Cursor();
    // })

    return (
        <Router>
            {/* <div className="cursor"></div>
            <div className="bubble"></div> */}
            <Wrapper>
                <GlobalStyle />
                {/* <LerpStickyCursor /> */}
                <Header />
                <SocialSideBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/work" element={<Works />} />
                    <Route path="/contact" element={<Contact />} />
                </Routes>
            </Wrapper>
        </Router>
    )
}

export default Layout
