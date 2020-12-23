import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import CardWork from 'components/CardWork'
import { dateFormat } from 'config'
import useWindowSize from 'hooks/useWindowSize'

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

    const skewConfigs = {
        ease: 0.1,
        current: 0,
        previous: 0,
        rounded: 0
    };
    
    const size = useWindowSize();

    const app = useRef();
    const scrollContainer = useRef();

    const [isLoading, setIsLoading] = useState(true);
    const [works, setWorks] = useState(null);

    useEffect(() => {
        document.body.style.height = `${
            scrollContainer.current.getBoundingClientRect().height
        }px`;
    }, [size.height]);

    useEffect(() => {
        requestAnimationFrame(() => skewScrolling());
    }, []);

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
    }, []);

    const skewScrolling = () => {
        skewConfigs.current = window.scrollY;
        skewConfigs.previous += (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease;
        skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100;

        const difference = skewConfigs.current - skewConfigs.rounded;
        const acceleration = difference / size.width;
        const velovity = +acceleration;
        const skew = velovity * 7.5;

        scrollContainer.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg`;

        requestAnimationFrame(() => skewScrolling());
    }

    return (
        <div ref={app} className="app">
            <main ref={scrollContainer} className="page">
                <header className="sectionHeader">
                    <h1>my works</h1>
                    <p>here you can find several small projects</p>
                </header>
                <WorksGrid>
                    {isLoading ? 'Loading..' : works.map(work => <CardWork work={work} key={work.id} />)}
                </WorksGrid>
            </main>
        </div>
    )
}