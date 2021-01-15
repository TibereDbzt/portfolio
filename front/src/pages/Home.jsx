import React, { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import { API_URL } from 'config'
import { Link } from 'react-router-dom'

// components
import PrimaryButton from 'components/PrimaryButton'

// styles
import { TextBlock, Name } from 'styles/HomeStyles'
import { Content } from 'styles/RepeatedStyles'

const Home2 = () => {

    const variants = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 },
    }

    const [hero, setHero] = useState(null);
    const [isLoading, setIsLoading] = useState(true)

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
    }, [])

    if (isLoading) {
        return (
            <>
            </>
        )
    }
    
    return (
        <Content centered>
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
            <PrimaryButton content="DISCOVER MY WORK"></PrimaryButton>
            {/* <Link className="giantBtn" to="/work"><span>DISCOVER MY WORK</span></Link> */}
        </Content>
    )
}

export default Home2
