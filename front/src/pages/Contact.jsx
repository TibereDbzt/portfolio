import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { API_URL } from 'config'

// styles
import { Content } from 'styles/RepeatedStyles'
import { LinksContainer } from 'styles/ContactStyles'

const Contact = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [contact, setContact] = useState(null);

    useEffect(() => {
        fetch(API_URL + '/contact',
        {
            method: "GET",
            headers: {
                'Accept' : 'Application/json'
            }
        })
        .then(res => res.json())
        .then(res => {
            setContact(res)
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
        <Content centered>
            <header className="sectionHeader">
                <h1>contact</h1>
                <p>{contact.availabilities}</p>
            </header>
            <LinksContainer>
                {contact.links && (
                    <ul>
                        {contact.links.map(({id, clean_url, url}) => (
                            <li key={id}><a href={url} target="_blank" rel="noreferrer noopener">{clean_url}</a></li>
                        ))}
                    </ul>
                )}
            </LinksContainer>
        </Content>
    );
}

export default Contact;
