import MainLayout from '@components/Layout/Layout'
import React from 'react'
import styles from './styles.module.scss'

function AdvanceHealine() {
    const { container, headline, content, title, des } = styles

    return (
        <MainLayout>
            <div className={container}>
                <div className={headline}>
                    <div className={content}>
                        <span className={des}>Don't miss super order</span>
                        <h2 className={title}>Our best products</h2>
                    </div>
                </div>
            </div>
        </MainLayout>
    )
}

export default AdvanceHealine
