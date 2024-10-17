import { useRef } from 'react'
import Button from '@components/Button/Button'
import useIntersectionObserver from '@hooks/useIntersectionObserver'
import useTranslateX from '@hooks/useTranslateX'
import styles from './styles.module.scss'

function SaleHomePage() {
    const targetRef = useRef(null)
    const { inViewport } = useIntersectionObserver(targetRef, { threshold: 0 })
    const { translateXPosition } = useTranslateX(inViewport)
    const { container, title, des, boxBtn, boxImg } = styles

    return (
        <div className={container} ref={targetRef}>
            <div
                className={boxImg}
                style={{
                    transform: `translateX(${translateXPosition}px)`,
                    transition: 'transform 600ms ease'
                }}
            >
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
            <div
                className={boxImg}
                style={{
                    transform: `translateX(-${translateXPosition}px)`,
                    transition: 'transform 600ms ease'
                }}
            >
                <img
                    src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image_2.jpeg'
                    alt=''
                />
            </div>
        </div>
    )
}

export default SaleHomePage
