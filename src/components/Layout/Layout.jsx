import React from 'react'
import styles from './styles.module.scss'

function MainLayout({ children }) {
    const { container } = styles

    return (
        <main>
            <div className={container}>{children}</div>
        </main>
    )
}

export default MainLayout
