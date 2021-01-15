import React, { useEffect, useState, useRef } from 'react'
import styled from 'styled-components'
import CardWork from 'components/CardWork'
import { dateFormat } from 'config'
import useWindowSize from 'hooks/useWindowSize'
import { API_URL } from 'config'

// styles
import { Content } from 'styles/RepeatedStyles'
import { WorksGrid } from 'styles/WorksStyles'

export default function Works() {

    const skewConfigs = {
        ease: 0.1,
        current: 0,
        previous: 0,
        rounded: 0
    }
    
    const size = useWindowSize()

    const all = useRef()
    const scrollContainer = useRef()

    const [isLoading, setIsLoading] = useState(true)
    const [works, setWorks] = useState(null)

    const skewScrolling = () => {
        skewConfigs.current = window.scrollY
        skewConfigs.previous += (skewConfigs.current - skewConfigs.previous) * skewConfigs.ease
        skewConfigs.rounded = Math.round(skewConfigs.previous * 100) / 100

        const difference = skewConfigs.current - skewConfigs.rounded
        const acceleration = difference / size.width
        const velovity = +acceleration
        const skew = velovity * 7.5

        if (scrollContainer.current !== null) {
            scrollContainer.current.style.transform = `translate3d(0, -${skewConfigs.rounded}px, 0) skewY(${skew}deg`
        }

        requestAnimationFrame(() => skewScrolling())
    }

    useEffect(() => {
        document.body.style.height = `${
            scrollContainer.current.getBoundingClientRect().height
        }px`
    }, [size.height])

    useEffect(() => {
        const skewScrollAnim = requestAnimationFrame(() => skewScrolling())
        return () => {
            console.log(skewScrollAnim)
            cancelAnimationFrame(skewScrollAnim)
        }
    }, [])

    useEffect(() => {
        fetch(API_URL + "/works",
            {
                method: "GET",
                headers: {
                    'Accept': 'Application/json'
                }
            })
            .then(res => res.json())
            .then(res => {
                res.map(work => {
                    work.date = new Date(work.date)
                })
                res.sort((work1, work2) => {
                    return work2.date - work1.date
                })
                res.map(work => {
                    work.date = work.date.toLocaleDateString(undefined, dateFormat)
                })
                setWorks(res)
                setIsLoading(false)
            })
    }, [])

    return (
        <Content>
            <div className="all" ref={all}>
                <div ref={scrollContainer}>
                    <header className="sectionHeader">
                        <h1>réalisations</h1>
                        <p>voici la plupart de mes travaux, classés chronologiquement.</p>
                    </header>
                    <WorksGrid>
                        {isLoading ? 'Loading..' : works.map(work => <CardWork work={work} key={work.id} />)}
                    </WorksGrid>
                </div>
            </div>
        </Content>
    )
}
