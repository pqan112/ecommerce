import { useEffect, useState } from 'react'
import { getProducts } from '@/apis/productsService'
import AdvanceHealine from '@components/AdvanceHealine/AdvanceHealine'
import Banner from '@components/Banner/Banner'
import Footer from '@components/Footer/Footer'
import Header from '@components/Header/Header'
import Info from '@components/Info/Info'
import HeadingListProducts from '@components/HeadingListProducts/HeadingListProducts'
import PopularProduct from '@components/PopularProduct/PopularProduct'
import SaleHomePage from '@components/SaleHomePage/SaleHomePage'
import styles from './styles.module.scss'

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
            <Footer />
        </div>
    )
}

export default HomePage
