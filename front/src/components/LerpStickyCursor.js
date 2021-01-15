import React, {useState, useEffect, useRef} from 'react'

// styles
import { Cursor, Bubble } from 'styles/CursorStyles'

const LerpStickyCursor = () => {

    let cursorRef = useRef()
    let bubbleRef = useRef()
    let animationFrame = null

    const [mousePosition, setMousePosition] = useState({
        cursorX: 0,
        cursorY: 0,
        bubbleX: 0,
        bubbleY: 0,
    })

    const onMouseMove = e => {
        const { clientX, clientY } = e
        setMousePosition({
            ...mousePosition,
            cursorX: clientX,
            cursorY: clientY
        })
    }
    
    const moveCursor = () => {
        // console.log(mousePosition)
        const { cursorX, cursorY, bubbleX, bubbleY } = mousePosition
        const diffX = cursorX - bubbleX
        const diffY = cursorY - bubbleY

        setMousePosition({
            bubbleX: bubbleX + diffX / 10,
            bubbleY: bubbleY + diffY / 10,
        })
        
        cursorRef.current.style.transform = `translate3d(${cursorX}px, ${cursorX}px, 0)`
        bubbleRef.current.style.transform = `translate3d(${bubbleX}px, ${bubbleY}px, 0)`

        animationFrame = requestAnimationFrame(moveCursor)
    }

    useEffect(() => {
        document.addEventListener('mousemove', onMouseMove)
        moveCursor()
        return () => {
            document.removeEventListener('mousemove', onMouseMove)
            cancelAnimationFrame(animationFrame);
        }
    }, [])
    
    return (
        <>
            <Cursor ref={cursorRef} />
            <Bubble ref={bubbleRef} />
        </>
    )
}

export default LerpStickyCursor
