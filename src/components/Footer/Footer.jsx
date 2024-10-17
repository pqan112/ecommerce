import React from 'react'
import { dataMenu } from './constants'
import styles from './styles.module.scss'

function Footer() {
    const { container, boxNav, navItem, copyRight } = styles

    return (
        <div className={container}>
            <div>
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/2022/12/marseille-logo.png'
                    alt='logo'
                    width={160}
                    height={55}
                />
            </div>

            <div className={boxNav}>
                {dataMenu.map((item, index) => (
                    <div key={index} className={navItem}>
                        {item.content}
                    </div>
                ))}
            </div>

            <div>
                <p>Guaranteed safe checkout</p>
                <img
                    src='https://xstore.b-cdn.net/elementor2/marseille04/wp-content/uploads/sites/2/elementor/thumbs/Icons-123-pzks3go5g30b2zz95xno9hgdw0h3o8xu97fbaqhtb6.png'
                    alt='payment supports'
                />
            </div>

            <div className={copyRight}>
                Copyright © 2024 HLTCD theme. Created by HLTCD
            </div>
        </div>
    )
}

export default Footer
