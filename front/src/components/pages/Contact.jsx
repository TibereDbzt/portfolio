import React, { useState, useEffect } from 'react'
import styled from 'styled-components'
import { API_URL } from 'config'

const LinksContainer = styled.address`

    > ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        column-gap: 80px;
        row-gap: 40px;
        list-style: none;
        padding: 100px 0;
        /* margin-left: -8px; */

        > li > a {
            padding: 8px;
        }
    }
`

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
        <main className="page">
            <h1>contact</h1>
            <p>{contact.availabilities}</p>
            <LinksContainer>
                {contact.links && (
                    <ul>
                        {contact.links.map(({id, clean_url, url}) => (
                            <li key={id}><a href={url} target="_blank">{clean_url}</a></li>
                        ))}
                    </ul>
                )}
            </LinksContainer>
        </main>
    );
}

export default Contact;
