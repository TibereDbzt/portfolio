import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import CardWork from 'components/CardWork'
import { dateFormat } from 'config'
import LocomotiveScroll from 'locomotive-scroll';
import 'locomotive-scroll.css';

// document.addEventListener('DOMContentLoaded', e => {
//     const scroll = new LocomotiveScroll({
//         el: document.querySelector('[data-scroll-container]'),
//         smooth: true,
//         offset: [0, 80],
//     });
// })

const WorksGrid = styled.div`
    width: 100%;
    padding: 30px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    column-gap: 10%;
    row-gap: 160px;

    @media (max-width: 1088px) {
        row-gap: 120px;
    }

    @media (max-width: 800px) {
        row-gap: 80px;
    }

    @media (max-width: 800px) {
        grid-template-columns: 1fr;
    }
`

export default function Works() {

    const app = useRef();
    const scrollContainer = useRef();

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
                res.map(work => {
                    work.date = new Date(work.date);
                })
                res.sort((work1, work2) => {
                    return work2.date - work1.date;
                })
                res.map(work => {
                    work.date = work.date.toLocaleDateString(undefined, dateFormat);
                })
                setWorks(res)
                setIsLoading(false)
            })
    }, [])

    return (
        <main data-scroll-container className="page">
            <header data-scroll-section className="sectionHeader">
                <h1 data-scroll>my works</h1>
                <p data-scroll>here you can find several small projects</p>
            </header>
            <WorksGrid data-scroll-section>
                {isLoading ? 'Loading..' : works.map(work => <CardWork data-scroll data-scroll-speed="2" work={work} key={work.id} />)}
            </WorksGrid>
        </main>
    )
}