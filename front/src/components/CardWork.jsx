import React from 'react'
import styled from 'styled-components'
import { API_URL } from './../config'

const Card = styled.div`
    position: relative;
    width: 100%;

    &:hover .imgPreview {
        filter: none;
    }
`

const PreviewContainer = styled.div`
    position: relative;
`

const Tags = styled.div`
    z-index: 5;
    position: absolute;
    top: -10px;
    right: -10px;
    display: flex;

    > div {
        display: flex;
        justify-content: center;
        align-items: center;
        background-color: var(--primary);
        padding: 6px 14px;
        color: white;
        z-index: 10;
        border-radius: 2px;
        margin: 0 4px;
        font-size: 0.8rem;
        text-transform: uppercase;

        &:first-of-type {
            margin-left: 0;
        }

        &:last-of-type {
            margin-right: 0;
        }
    }
`

const Date = styled.p`
    position: absolute;
    top: -3px;
    left: 3px;
    transform: translateY(-100%);
    font-size: 12px;
    text-transform: uppercase;
    font-weight: 400;
`

const Preview = styled.img`
    width: 100%;
    height: auto;
    position: relative;
    border-radius: 6px;
    filter: blur(0.5px) brightness(0.82) grayscale(1);
    transition: 0.5s filter ease;
`

const LinksContainer = styled.div`
    position: absolute;
    bottom: 4px;
    right: 0;
    background-color: var(--primary);
    display: flex;
    border-radius: 6px 0 6px 0
`

const Link = styled.a`
    padding: 12px 16px;
    display: flex;
    justify-content: center;
    align-items: center;
`

const TextContainer = styled.div`
    padding-top: 18px;
`

const Name = styled.h3`
    font-size: 2.1rem;
    margin: 0;
`

const Description = styled.p`
    font-size: 16px;
    margin-top: 10px;
`

export default function CardWork({work}) {

    const keytechs = work.keytechs.split(',')
    
    return (
        <Card>
            <Tags data-scroll data-scroll-speed="0.4">
                {keytechs.map( (keytech, i) => (
                    <div key={i}>{keytech}</div>
                ))}
            </Tags>
            <PreviewContainer>
                <Preview className="imgPreview" src={ API_URL + work.preview[0].formats.medium.url } alt={work.preview.alternativeText }/>
                <LinksContainer>
                    <Link href={work.repository} target="_blank">
                        <svg width="26" height="26" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fillRule="evenodd" clipRule="evenodd" d="M10.967 0C8.05848 0.00036459 5.2692 1.15593 3.21256 3.21256C1.15593 5.2692 0.00036459 8.05848 0 10.967C0 15.8097 3.1625 19.9141 7.46763 21.395C8.00663 21.4624 8.20737 21.1255 8.20737 20.856V18.9722C5.181 19.646 4.50863 17.4928 4.50863 17.4928C4.037 16.214 3.29725 15.8771 3.29725 15.8771C2.288 15.2048 3.36325 15.2047 3.36325 15.2047C4.43988 15.2721 5.04625 16.3488 5.04625 16.3488C6.0555 18.0304 7.60237 17.5588 8.20875 17.2906C8.27475 16.5509 8.61162 16.0806 8.88113 15.8111C6.45837 15.5416 3.90225 14.5997 3.90225 10.3606C3.90225 9.15063 4.30513 8.20737 5.04625 7.40025C4.9775 7.19812 4.57463 6.0555 5.181 4.57463C5.181 4.57463 6.12287 4.30512 8.20737 5.71863C9.08187 5.44912 10.0251 5.38175 10.967 5.38175C11.9089 5.38175 12.8508 5.5165 13.7253 5.71863C15.8111 4.3065 16.753 4.57463 16.753 4.57463C17.358 6.0555 16.9538 7.19813 16.8864 7.46763C17.6274 8.27486 18.036 9.33226 18.0304 10.428C18.0304 14.6671 15.4729 15.5416 13.0529 15.8111C13.4558 16.1466 13.7926 16.819 13.7926 17.8282V20.856C13.7926 21.1255 13.9934 21.461 14.5324 21.395C16.7131 20.659 18.6074 19.2563 19.9475 17.385C21.2875 15.5137 22.0055 13.2686 22 10.967C21.9326 4.9115 17.0225 0 10.967 0Z" fill="white"/>
                        </svg>
                    </Link>
                    <Link href={work.demo} target="_blank">
                        <svg width="24" height="24" viewBox="0 0 21 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M12.389 2.22222C12.0943 2.22222 11.8117 2.10516 11.6033 1.89679C11.3949 1.68841 11.2779 1.4058 11.2779 1.11111C11.2779 0.816426 11.3949 0.533811 11.6033 0.325437C11.8117 0.117063 12.0943 0 12.389 0H19.0556C19.3503 0 19.6329 0.117063 19.8413 0.325437C20.0497 0.533811 20.1667 0.816426 20.1667 1.11111V7.77778C20.1667 8.07246 20.0497 8.35508 19.8413 8.56345C19.6329 8.77183 19.3503 8.88889 19.0556 8.88889C18.761 8.88889 18.4783 8.77183 18.27 8.56345C18.0616 8.35508 17.9445 8.07246 17.9445 7.77778V3.79333L7.61897 14.1189C7.40941 14.3213 7.12874 14.4333 6.83741 14.4307C6.54608 14.4282 6.2674 14.3114 6.06139 14.1054C5.85539 13.8993 5.73853 13.6207 5.736 13.3293C5.73347 13.038 5.84546 12.7573 6.04786 12.5478L16.3734 2.22222H12.389ZM0.166748 4.44444C0.166748 3.85507 0.400874 3.28984 0.817622 2.8731C1.23437 2.45635 1.7996 2.22222 2.38897 2.22222H7.94453C8.23921 2.22222 8.52183 2.33929 8.7302 2.54766C8.93857 2.75603 9.05564 3.03865 9.05564 3.33333C9.05564 3.62802 8.93857 3.91063 8.7302 4.11901C8.52183 4.32738 8.23921 4.44444 7.94453 4.44444H2.38897V17.7778H15.7223V12.2222C15.7223 11.9275 15.8394 11.6449 16.0477 11.4365C16.2561 11.2282 16.5387 11.1111 16.8334 11.1111C17.1281 11.1111 17.4107 11.2282 17.6191 11.4365C17.8275 11.6449 17.9445 11.9275 17.9445 12.2222V17.7778C17.9445 18.3671 17.7104 18.9324 17.2937 19.3491C16.8769 19.7659 16.3117 20 15.7223 20H2.38897C1.7996 20 1.23437 19.7659 0.817622 19.3491C0.400874 18.9324 0.166748 18.3671 0.166748 17.7778V4.44444Z" fill="white"/>
                        </svg>
                    </Link>
                </LinksContainer>
                <Date>{work.date}</Date>
            </PreviewContainer>
            <TextContainer>
                <Name data-scroll-offset="50" className="titleWork" data-scroll-class="scroll-titleWork" data-scroll>_{work.name}</Name>
                <Description data-scroll data-scroll-speed="0.15" data-scroll-class="scroll-descWork" className="descWork">{work.description}</Description>
            </TextContainer>
        </Card>
    )
}