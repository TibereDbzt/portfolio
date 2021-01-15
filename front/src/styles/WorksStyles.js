import styled from 'styled-components'

export const WorksGrid = styled.div`
    width: 100%;
    padding: 30px 0;
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    column-gap: 10%;
    row-gap: 160px;
    padding-bottom: 3rem;

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
