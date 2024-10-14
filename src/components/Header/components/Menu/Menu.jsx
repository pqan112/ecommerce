import React from 'react'
import styles from '../../styles.module.scss'

function Menu({ content, href }) {
    const { menuItem } = styles
    return <div className={menuItem}>{content}</div>
}

export default Menu
