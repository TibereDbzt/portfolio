import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { API_URL } from 'config'

const History = styled.section`

    > div {
        margin-top: 40px;
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        column-gap: 80px;
        row-gap: 40px;
    }
`

const Experience = styled.div`

    p {
        font-size: 14px;

        &:first-of-type {
            margin-bottom: 8px;
            font-style: italic;
        }
    }
`

const Skills = styled.section`

    > h4 {
        margin-bottom: 20px;
    }

    > ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        column-gap: 80px;
        row-gap: 16px;

        > li {
            text-transform: uppercase;
        }
    }
`

const Skill = styled.li`
    font-size: 1.2rem;
`

const About = () => {

    const [isLoading, setisLoading] = useState(true);
    const [about, setAbout] = useState(null);

    useEffect(() => {
        fetch(API_URL + '/about',
        {
            method: "GET",
            headers: {
                'Accept' : 'Application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            setAbout(res)
            setisLoading(false)
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
        <main className="page">
            <History>
                <header className="sectionHeader">
                    <h1>history</h1>
                    <p>{about.biography}</p>
                </header>
                {about.history && (
                    <div>
                        {about.history.map(({id, start_date, end_date, location, name, description, single_date}) => (
                            <Experience key={id}>
                                <p>
                                    {single_date ? end_date.slice(0, 4) : start_date.slice(0, 4) + ' - ' + end_date.slice(0, 4)}
                                    {' @' + location}
                                </p>
                                <h4>{name}</h4>
                                <p>{description}</p>
                            </Experience>
                        ))}
                    </div>
                )}
            </History>
            <Skills>
                <header className="sectionHeader">
                    <h1>skills</h1>
                </header>
                {about.skills && (
                    <ul>
                        {about.skills.map(({id, name, level}) => (
                            <Skill key={id}>{name}</Skill>
                        ))}
                    </ul>
                )}
            </Skills>
        </main>
    )
}

export default About;
