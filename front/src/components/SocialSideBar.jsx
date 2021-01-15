import React from 'react'
import { motion } from 'framer-motion'

// styles
import { SideBar, SocialLink, Line } from 'styles/SocialSideBar'

export default function SocialSideBar() {

    return (
        <SideBar>
            <SocialLink href="https://github.com/TibereDbzt/" target="_blank" rel="noreferrer noopener">
                <svg width="20" height="20" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fillRule="evenodd" clipRule="evenodd" d="M10.967 0C8.05848 0.00036459 5.2692 1.15593 3.21256 3.21256C1.15593 5.2692 0.00036459 8.05848 0 10.967C0 15.8097 3.1625 19.9141 7.46763 21.395C8.00663 21.4624 8.20737 21.1255 8.20737 20.856V18.9722C5.181 19.646 4.50863 17.4928 4.50863 17.4928C4.037 16.214 3.29725 15.8771 3.29725 15.8771C2.288 15.2048 3.36325 15.2047 3.36325 15.2047C4.43988 15.2721 5.04625 16.3488 5.04625 16.3488C6.0555 18.0304 7.60237 17.5588 8.20875 17.2906C8.27475 16.5509 8.61162 16.0806 8.88113 15.8111C6.45837 15.5416 3.90225 14.5997 3.90225 10.3606C3.90225 9.15063 4.30513 8.20737 5.04625 7.40025C4.9775 7.19812 4.57463 6.0555 5.181 4.57463C5.181 4.57463 6.12287 4.30512 8.20737 5.71863C9.08187 5.44912 10.0251 5.38175 10.967 5.38175C11.9089 5.38175 12.8508 5.5165 13.7253 5.71863C15.8111 4.3065 16.753 4.57463 16.753 4.57463C17.358 6.0555 16.9538 7.19813 16.8864 7.46763C17.6274 8.27486 18.036 9.33226 18.0304 10.428C18.0304 14.6671 15.4729 15.5416 13.0529 15.8111C13.4558 16.1466 13.7926 16.819 13.7926 17.8282V20.856C13.7926 21.1255 13.9934 21.461 14.5324 21.395C16.7131 20.659 18.6074 19.2563 19.9475 17.385C21.2875 15.5137 22.0055 13.2686 22 10.967C21.9326 4.9115 17.0225 0 10.967 0Z" fill="#61c284"/>
                </svg>
            </SocialLink>
            <SocialLink href="https://www.linkedin.com/in/tibere-debizet/" target="_blank" rel="noreferrer noopener">
                <svg width="18" height="18" viewBox="0 0 20 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4.4773 19H0.330726V5.64714H4.4773V19ZM2.40151 3.82571C1.07575 3.82571 0 2.72714 0 1.40143C0 0.76453 0.253016 0.153717 0.703387 -0.296638C1.15376 -0.746993 1.76459 -1 2.40151 -1C3.03844 -1 3.64927 -0.746993 4.09964 -0.296638C4.55001 0.153717 4.80303 0.76453 4.80303 1.40143C4.80303 2.72714 3.72728 3.82571 2.40151 3.82571ZM19.9964 19H15.8591V12.5C15.8591 10.9507 15.8277 8.96429 13.7033 8.96429C11.5476 8.96429 11.2168 10.6471 11.2168 12.3886V19H7.07454V5.64714H11.0511V7.46857H11.109C11.6626 6.41929 13.0148 5.31214 15.032 5.31214C19.2285 5.31214 20 8.07572 20 11.665V19H19.9964Z" fill="#61c284"/>
                </svg>
            </SocialLink>
            <SocialLink href="https://twitter.com/TibereDebizet" target="_blank" rel="noreferrer noopener">
                <svg width="19" height="17" viewBox="0 0 27 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M26.9999 2.94689C26.0437 3.35939 25.0031 3.65626 23.9312 3.77189C25.0441 3.11075 25.8774 2.06626 26.2749 0.834388C25.2307 1.4556 24.0867 1.89121 22.8937 2.12189C22.3951 1.58885 21.792 1.1642 21.1221 0.874411C20.4522 0.584623 19.7298 0.435901 18.9999 0.437513C16.0468 0.437513 13.6718 2.83126 13.6718 5.76876C13.6718 6.18126 13.7218 6.59376 13.8031 6.99064C9.3812 6.75939 5.43745 4.64689 2.81558 1.41251C2.33784 2.2285 2.08749 3.15759 2.09058 4.10314C2.09058 5.95314 3.0312 7.58439 4.46558 8.54376C3.62028 8.51047 2.79477 8.27813 2.0562 7.86564V7.93126C2.0562 10.5219 3.88745 12.6688 6.32808 13.1625C5.86982 13.2815 5.39841 13.3424 4.92495 13.3438C4.57808 13.3438 4.24995 13.3094 3.9187 13.2625C4.5937 15.375 6.55933 16.9094 8.89995 16.9594C7.0687 18.3938 4.77495 19.2375 2.28433 19.2375C1.83745 19.2375 1.42495 19.2219 0.996826 19.1719C3.35933 20.6875 6.16245 21.5625 9.1812 21.5625C18.9812 21.5625 24.3437 13.4438 24.3437 6.39689C24.3437 6.16564 24.3437 5.93439 24.3281 5.70314C25.3656 4.94376 26.2749 4.00314 26.9999 2.94689Z" fill="#61c284"/>
                </svg>
            </SocialLink>
            <Line></Line>
        </SideBar>
    )
}
