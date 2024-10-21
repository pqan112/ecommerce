import React from 'react'
import styles from '../../styles.module.scss'

function Menu({ content, href, setIsOpen }) {
    const { menuItem } = styles
    return <div className={menuItem} onClick={() => setIsOpen(true)}>{content}</div>
}

export default Menu
