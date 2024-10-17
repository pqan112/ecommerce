import { useEffect, useState } from 'react'
import useScrollHandling from './useScrollHandling'

function useTranslateX(inViewport) {
    const { scrollDirection, scrollPosition } = useScrollHandling()
    const [translateXPosition, setTranslateXPosition] = useState(80)

    const handleTranslateX = () => {
        if (scrollDirection === 'down' && inViewport) {
            setTranslateXPosition(
                translateXPosition <= 0 ? 0 : translateXPosition - 2
            )
        } else if (scrollDirection === 'up') {
            setTranslateXPosition(
                translateXPosition >= 80 ? 80 : translateXPosition + 2
            )
        }
    }

    useEffect(() => {
        handleTranslateX()
    }, [inViewport, scrollPosition])

    return { translateXPosition }
}

export default useTranslateX
