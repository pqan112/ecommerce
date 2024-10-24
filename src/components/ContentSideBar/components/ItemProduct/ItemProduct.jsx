import { IoCloseOutline } from 'react-icons/io5'
import styles from './styles.module.scss'

function ItemProduct() {
    const { container, boxContent, title, price, boxClose, size } = styles

    return (
        <div className={container}>
            <img
                src='https://xstore.8theme.com/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/Image-2.1-min.jpg'
                alt=''
            />

            <div className={boxClose}>
                <IoCloseOutline
                    style={{
                        fontSize: '25px',
                        color: 'c1c1c1'
                    }}
                />
            </div>

            <div className={boxContent}>
                <div className={title}>title of product</div>
                <div className={size}>Size:M</div>
                <div className={price}>$119.99</div>
                <div className={price}>SKU: 122349</div>
            </div>
        </div>
    )
}

export default ItemProduct