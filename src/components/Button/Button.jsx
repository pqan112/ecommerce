import styles from './styles.module.scss'
import clsx from 'clsx'

function Button({ content, isWithFull, isPrimary = true }) {
    const { btn, primary, secondary, widthFull } = styles
    return (
        <button
            className={clsx(btn, {
                [widthFull]: isWithFull,
                [primary]: isPrimary,
                [secondary]: !isPrimary
            })}
        >
            {content}
        </button>
    )
}

export default Button
