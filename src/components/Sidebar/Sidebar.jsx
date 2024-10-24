import { useSidebarStore } from '@stores/useSidebarStore'
import { TfiClose } from 'react-icons/tfi'
import clsx from 'clsx'
import Login from '@components/ContentSideBar/Login/Login'
import styles from './styles.module.scss'
import Compare from '@components/ContentSideBar/Compare/Compare'
import WishList from '@components/ContentSideBar/WishList/WishList'
import Cart from '@components/ContentSideBar/Cart/Cart'

function Sidebar() {
    const { container, overlay, sideBar, sidebarOpen, boxIcon } = styles
    const { isOpen, setIsOpen, type } = useSidebarStore((state) => state)

    const handleRenderContent = () => {
        switch (type) {
            case 'login':
                return <Login />
            case 'compare':
                return <Compare />
            case 'wishList':
                return <WishList />
            case 'cart':
                return <Cart />

            default:
                return null
        }
    }

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
                        <TfiClose size={15} />
                    </div>
                )}
                {handleRenderContent()}
            </div>
        </div>
    )
}

export default Sidebar
