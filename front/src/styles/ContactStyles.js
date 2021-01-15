import styled from 'styled-components'

export const LinksContainer = styled.address`

    > ul {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
        column-gap: 80px;
        row-gap: 40px;
        list-style: none;
        padding: 100px 0;

        @media (max-width: 800px) {
            padding: 0 0;
        }

        > li > a {
            padding: 8px;
            font-size: 1.7rem;
            white-space: pre;
        }
    }
`
