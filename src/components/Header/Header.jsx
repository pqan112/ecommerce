import { useContext, useEffect, useState } from 'react'
import clsx from 'clsx'
import useScrollHandling from '@hooks/useScrollHandling'
import Logo from '@icons/images/Logo-retina.png'
import cartIcon from '@icons/svgs/cartIcon.svg'
import heartIcon from '@icons/svgs/heart.svg'
import reloadIcon from '@icons/svgs/reloadIcon.svg'
import BoxIcon from './components/BoxIcon/BoxIcon'
import Menu from './components/Menu/Menu'
import { dataBoxIcon, dataMenu } from './constants'
import styles from './styles.module.scss'
import { SidebarContext } from '@/contexts/SideBarProvider'

function Header() {
    const [fixedPosition, setFixedPosition] = useState(false)
    const {isOpen, setIsOpen} = useContext(SidebarContext)
    console.log(isOpen)
    const {
        container,
        containerHeader,
        boxContainer,
        containerMenu,
        menuLeft,
        logo,
        menuRight,
        topHeader, 
        fixedHeader
    } = styles

    const { scrollPosition } = useScrollHandling()
    useEffect(() => {
        setFixedPosition(scrollPosition > 100)
    }, [scrollPosition])

    return (
        <div className={clsx(container, topHeader, {
            [fixedHeader]: fixedPosition
        })}>
            <div className={containerHeader}>
                <div className={menuLeft}>
                    <div className={boxContainer}>
                        {dataBoxIcon.map((item, index) => {
                            return (
                                <BoxIcon
                                    key={index}
                                    type={item.type}
                                    href={item.href}
                                />
                            )
                        })}
                    </div>
                    <div className={containerMenu}>
                        {dataMenu.slice(0, 3).map((item, index) => {
                            return <Menu key={index} content={item.content} />
                        })}
                    </div>
                </div>
                <div>
                    <img src={Logo} className={logo} alt='logo' />
                </div>
                <div className={menuRight}>
                    <div className={containerMenu}>
                        {dataMenu
                            .slice(3, dataMenu.length)
                            .map((item, index) => {
                                return (
                                    <Menu key={index} content={item.content} setIsOpen={setIsOpen}/>
                                )
                            })}
                    </div>

                    <div className={boxContainer}>
                        <img
                            width={22}
                            height={22}
                            src={reloadIcon}
                            alt='reload'
                        />
                        <img
                            width={22}
                            height={22}
                            src={heartIcon}
                            alt='wish list'
                        />
                        <img width={22} height={22} src={cartIcon} alt='cart' />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
