import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import CardWork from 'components/CardWork'

const WorksGrid = styled.div`
    width: 100%;
    padding: 70px 60px;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
`

export default function Works() {

    const [isLoading, setIsLoading] = useState(true);
    const [works, setWorks] = useState(null);

    useEffect(() => {
        fetch('http://localhost:1337/works',
            {
                method: "GET",
                headers: {
                    'Accept': 'Application/json'
                }
            })
            .then(res => res.json())
            .then(res => {
                setWorks(res)
                setIsLoading(false)
            })
    }, [])

    return (
        <main className="page">
            <h1>my works</h1>
            <p>here you can find several small projects</p>
            <WorksGrid>
                {isLoading ? 'Loading..' : works.map(work => <CardWork work={work} key={work.id} />)}
            </WorksGrid>
        </main>
    )
}