import React, { useEffect, useRef, useState } from 'react'
import Button from '@components/Button/Button'
import styles from './styles.module.scss'

function SaleHomePage() {
    const [scrollDirection, setScrollDirection] = useState(null)
    const [translateXPosition, setTranslateXPosition] = useState(80)
    const previousScrollPosition = useRef(0)
    const { container, title, des, boxBtn, boxImg } = styles

    const scrollTracking = () => {
        const currentScrollPosition = window.scrollY
        if (currentScrollPosition > previousScrollPosition.current) {
            setScrollDirection('down')
        } else if (currentScrollPosition < previousScrollPosition.current) {
            setScrollDirection('up')
        }

        previousScrollPosition.current =
            currentScrollPosition <= 0 ? 0 : currentScrollPosition
    }

    const handleTranslateX = () => {
        if (scrollDirection === 'down') {
        }
    }

    useEffect(() => {
        window.addEventListener('scroll', scrollTracking)

        return () => window.removeEventListener('scroll', scrollTracking)
    }, [])

    console.log(scrollDirection)

    return (
        <div className={container}>
            <div className={boxImg}>
                <img
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_1.jpeg'
                    alt=''
                />
            </div>
            <div>
                <h2 className={title}>Sale Of The Year</h2>
                <p className={des}>
                    Libero sed faucibus facilisis fermentum. Est nibh sed massa
                    sodales.
                </p>

                <div className={boxBtn}>
                    <Button content={'Read more'} isPrimary={false} />
                </div>
            </div>
            <div className={boxImg}>
                <img
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg'
                    alt=''
                />
            </div>
        </div>
    )
}

export default SaleHomePage
