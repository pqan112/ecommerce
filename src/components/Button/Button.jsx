import styles from './styles.module.scss'
import clsx from 'clsx'

function Button({ content, isPrimary = true }) {
    const { btn, primary, secondary } = styles
    return (
        <button
            className={clsx(btn, {
                [primary]: isPrimary,
                [secondary]: !isPrimary
            })}
        >
            {content}
        </button>
    )
}

export default Button
