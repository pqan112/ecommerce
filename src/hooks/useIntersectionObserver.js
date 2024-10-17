import { useEffect, useState } from 'react'

function useIntersectionObserver(targetRef, options) {
    const [inViewport, setInViewport] = useState(false)

    useEffect(() => {
        const observer = new IntersectionObserver(([entries]) => {
            setInViewport(entries.isIntersecting)
        }, options)
        const currentRef = targetRef.current
        if (currentRef) {
            observer.observe(currentRef)
        }

        return () => {
            if (currentRef) {
                observer.unobserve(currentRef)
            }
        }
    }, [targetRef, options])

    return { inViewport }
}

export default useIntersectionObserver
