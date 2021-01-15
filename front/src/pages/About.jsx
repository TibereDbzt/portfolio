import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { API_URL } from 'config'

// styles
import { Content } from 'styles/RepeatedStyles'
import { Biography, History, Experience, Skills } from 'styles/AboutStyles'

const About = () => {

    const [isLoading, setisLoading] = useState(true)
    const [about, setAbout] = useState(null)

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
    }, [])

    if (isLoading) {
        return (
            <>
            </>
        )
    }
    
    return (
        <Content centered>
            <Biography>{about.biography}</Biography>
            <History>
                <header className="sectionHeader">
                    <h1>historique</h1>
                </header>
                {about.history && (
                    <div>
                        { about.history.map( ({id, end_date, start_date, location, name, description, single_date}) =>
                            (
                                <Experience key={id}>
                                    <p>
                                        {single_date ? end_date.slice(0, 4) : start_date.slice(0, 4) + ' - ' + end_date.slice(0, 4)}
                                        {' @' + location}
                                    </p>
                                    <h4>{name}</h4>
                                    <p>{description}</p>
                                </Experience>
                            )
                        )}
                    </div>
                )}
            </History>
            <Skills>
                <header className="sectionHeader">
                    <h1>technos</h1>
                </header>
                {about.skills && (
                    <ul>
                        {about.skills.map(({id, name, level}) => (
                            <li key={id}>{name}</li>
                        ))}
                    </ul>
                )}
            </Skills>
        </Content>
    )
}

export default About
