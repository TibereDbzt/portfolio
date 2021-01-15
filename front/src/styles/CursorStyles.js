import styled from 'styled-components'

export const Cursor = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 6px;
    height: 6px;
    border-radius: 50%;

    background-color: var(--primary);
    mix-blend-mode: difference;

    transform: translate(-50%, -50%);

    pointer-events: none;
    z-index: 1000;
`

export const Bubble = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    padding: 1.2rem;
    border-radius: 50%;
    
    background: transparent;
    mix-blend-mode: difference;
    border: 1px solid var(--primary);
    
    transform: translate(-50%, -50%);
    transition: all 0.3s ease;
    transition-property: transform;
    will-change: transform;

    pointer-events: none;
    z-index: 999;

    &.onLink {
        background: var(--primary);

        & ~ .cursor {
            background: white;
        }
    }
`
