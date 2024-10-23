import React, { useContext } from 'react'
import styles from './styles.module.scss'
import { SidebarContext } from '@/contexts/SideBarProvider'
import clsx from 'clsx'
import { TfiClose } from 'react-icons/tfi'
import Login from '@components/ContentSideBar/Login/Login'

function Sidebar() {
    const { isOpen, setIsOpen } = useContext(SidebarContext)

    const { container, overlay, sideBar, sidebarOpen, boxIcon } = styles

    return (
        <div className={container}>
            <div
                className={clsx({
                    [overlay]: isOpen
                })}
                onClick={() => setIsOpen(false)}
            ></div>
            <div
                className={clsx(sideBar, {
                    [sidebarOpen]: isOpen
                })}
            >
                {isOpen && (
                    <div className={boxIcon} onClick={() => setIsOpen(false)}>
                        <TfiClose size={15}/>
                    </div>
                )}
                <Login />

            </div>
        </div>
    )
}

export default Sidebar
