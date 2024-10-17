import CountdownTimer from '@components/CountdownTimer/CountdownTimer'
import MainLayout from '@components/Layout/Layout'
import styles from './styles.module.scss'
import Button from '@components/Button/Button'
import ProductItem from '@components/ProductItem/ProductItem'

function HeadingListProducts({ products }) {
    const { container, containerTimmer, countdownInfo, title, containerItem } =
        styles

    let targetDate = '2024-12-31T00:00:00'
    return (
        <MainLayout>
            <div className={container}>
                <div className={containerTimmer}>
                    <div className={countdownInfo}>
                        <CountdownTimer targetDate={targetDate} />
                        <h3 className={title}>The Classics Make A Comeback</h3>
                        <Button content={'Buy now'} />
                    </div>
                </div>
                <div className={containerItem}>
                    {products.map((product) => (
                        <ProductItem
                            key={product._id}
                            src={product.images[0]}
                            prevSrc={product.images[1]}
                            name={product.name}
                            price={product.price}
                        />
                    ))}
                </div>
            </div>
        </MainLayout>
    )
}

export default HeadingListProducts
