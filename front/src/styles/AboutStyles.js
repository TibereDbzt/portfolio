import styled from 'styled-components'

export const Biography = styled.p`
    margin-bottom: 2rem;
`

export const History = styled.div`
    margin-bottom: 2rem;

    > div {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        column-gap: 80px;
        row-gap: 40px;
    }
`

export const Experience = styled.div`

    p {
        font-size: 14px;

        &:first-of-type {
            margin-bottom: 8px;
            font-style: italic;
        }
    }
`

export const Skills = styled.div`

    @media (max-width: 800px) {
        margin-bottom: 5rem;
    }

    > h4 {
        margin-bottom: 2rem;
    }

    > ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        column-gap: 80px;
        row-gap: 16px;

        > li {
            font-size: 1.2rem;
            text-transform: uppercase;
        }
    }
`
