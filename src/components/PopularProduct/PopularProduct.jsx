import React from 'react'
import styles from './styles.module.scss'
import MainLayout from '@components/Layout/Layout'
import ProductItem from '@components/ProductItem/ProductItem'

function PopularProduct({ products }) {
    const { container } = styles
    return (
        <>
            <MainLayout>
                <div className={container}>
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
            </MainLayout>
        </>
    )
}

export default PopularProduct
