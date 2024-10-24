import { useEffect, useState } from 'react'
import { useSidebarStore } from '@stores/useSidebarStore'
import { dataBoxIcon, dataMenu } from './constants'
import { TfiReload } from 'react-icons/tfi'
import { BsHeart } from 'react-icons/bs'
import { PiShoppingCart } from 'react-icons/pi'
import clsx from 'clsx'
import useScrollHandling from '@hooks/useScrollHandling'
import Logo from '@icons/images/Logo-retina.png'
import BoxIcon from './components/BoxIcon/BoxIcon'
import Menu from './components/Menu/Menu'
import styles from './styles.module.scss'

function Header() {
    const [fixedPosition, setFixedPosition] = useState(false)
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
    const { setIsOpen, type, setType, isOpen } = useSidebarStore(
        (state) => state
    )
    const { scrollPosition } = useScrollHandling()
    useEffect(() => {
        setFixedPosition(scrollPosition > 100)
    }, [scrollPosition])

    const handleOpenSidebar = (type) => {
        setIsOpen(true)
        setType(type)
    }

    console.log(isOpen, type)

    return (
        <div
            className={clsx(container, topHeader, {
                [fixedHeader]: fixedPosition
            })}
        >
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
                                    <Menu
                                        key={index}
                                        content={item.content}
                                        setIsOpen={setIsOpen}
                                    />
                                )
                            })}
                    </div>

                    <div className={boxContainer}>
                        <TfiReload
                            style={{
                                fontSize: '18px',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleOpenSidebar('compare')}
                        />
                        <BsHeart
                            style={{
                                fontSize: '18px',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleOpenSidebar('wishList')}
                        />
                        <PiShoppingCart
                            style={{
                                fontSize: '20px',
                                cursor: 'pointer'
                            }}
                            onClick={() => handleOpenSidebar('cart')}
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header
