import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import PrimaryButton from 'components/PrimaryButton'
import { API_URL } from 'config'

const TextBlock = styled.div`
    margin-bottom: 70px;
`
const Hello = styled.p`
    
`

const Name = styled.h1`
    margin: 0;
    font-size: 6rem;
    position: relative;
    -webkit-text-stroke: 1px black; /* width and color */
    color: transparent;

    &:before {
        content: 'Tibère Debizet';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(-1px, 2px) rotate(-1deg);
        -webkit-text-stroke: 1px black; /* width and color */
        color: rgba(44, 134, 89, 0.3);
        z-index: -10;
    }

    &:after {
        content: 'Tibère Debizet';
        display: block;
        position: absolute;
        top: 0;
        left: 0;
        transform: translate(4px, 4px) rotate(0.5deg);
        -webkit-text-stroke: 1px black; /* width and color */
        color: rgba(4, 153, 0, 0.08);
        z-index: -10;
    }
`

const Resume = styled.p`
    
`

const Home = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [hero, setHero] = useState(null);

    useEffect(() => {
        fetch(API_URL + '/hero',
        {
            method: "GET",
            headers: {
                'Accept' : 'Application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            setHero(res)
            setIsLoading(false)
        })
    }, []);

    if (isLoading) {
        return (
            <main className="page">
                <p>Loading...</p>
            </main>
        )
    }
    
    return (
        <main className="page home">
            <TextBlock>
                <Hello>{hero.greeting}</Hello>
                <Name>{hero.name}</Name>
                <Resume>{hero.short_biography}</Resume>
            </TextBlock> 
            <PrimaryButton content="DISCOVER MY WORK"></PrimaryButton>
        </main>
    )
}

export default Home;
