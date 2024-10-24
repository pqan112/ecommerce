import React from 'react'
import { useSidebarStore } from '@stores/useSidebarStore'
import styles from '../../styles.module.scss'

function Menu({ content, href }) {
    const { menuItem } = styles

    const { setType, setIsOpen } = useSidebarStore((state) => state)

    const handleShowSidebar = () => {
        if (content === 'Sign in') {
            setIsOpen(true)
            setType('login')
        }
    }
    return (
        <div className={menuItem} onClick={handleShowSidebar}>
            {content}
        </div>
    )
}

export default Menu
