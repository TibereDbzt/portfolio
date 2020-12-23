import React, { useEffect, useState } from 'react'
import { motion } from 'framer-motion'
import styled from 'styled-components'
import PrimaryButton from 'components/PrimaryButton'
import { API_URL } from 'config'
import { Link } from 'react-router-dom'

const TextBlock = styled.div`
    margin-bottom: 70px;
`

const Name = styled(motion.h1)`
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
        z-index: -10;
    }
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

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
      }
    
    return (
        <main className="page home">
            <TextBlock>
                <motion.p
                    animate={{ translateY: 0 }}
                    initial={{ translateY: 10 }}
                    transition={{ duration: 0.7 }}
                >{hero.greeting}</motion.p>
                <Name
                    initial="hidden"
                    animate="visible"
                    variants={variants}
                    transition={{ duration: 0.8 }}
                >{hero.name}</Name>
                <p>{hero.short_biography}</p>
            </TextBlock> 
            {/* <PrimaryButton content="DISCOVER MY WORK"></PrimaryButton> */}
            <Link className="giantBtn" to="/work"><span>DISCOVER MY WORK</span></Link>
        </main>
    )
}

export default Home;
