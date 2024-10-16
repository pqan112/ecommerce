import Banner from '@components/Banner/Banner'
import Header from '@components/Header/Header'
import Info from '@components/Info/Info'
import AdvanceHealine from '@components/AdvanceHealine/AdvanceHealine'
import styles from './styles.module.scss'
import HeadingListProducts from '@components/HeadingListProducts/HeadingListProducts'
import { useEffect, useState } from 'react'
import { getProducts } from '@/apis/productsService'
import PopularProduct from '@components/PopularProduct/PopularProduct'
import SaleHomePage from '@components/SaleHomePage/SaleHomePage'

function HomePage() {
    const [products, setProducts] = useState([])

    useEffect(() => {
        const fetchProducts = () => {
            getProducts().then((res) => {
                setProducts(res.contents)
            })
        }
        fetchProducts()
    }, [])

    const { container } = styles

    return (
        <div className={container}>
            <Header />
            <Banner />
            <Info />
            <AdvanceHealine />
            <HeadingListProducts products={products.slice(0, 2)} />
            <PopularProduct products={products.slice(2)} />
            <SaleHomePage />
        </div>
    )
}

export default HomePage
