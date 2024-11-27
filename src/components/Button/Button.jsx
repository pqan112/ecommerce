import styles from './styles.module.scss'
import clsx from 'clsx'

function Button({ type, content, isWithFull, isPrimary = true, ...props }) {
    const { btn, primary, secondary, widthFull } = styles
    return (
        <button
            type={type}
            className={clsx(btn, {
                [widthFull]: isWithFull,
                [primary]: isPrimary,
                [secondary]: !isPrimary
            })}
            {...props}
        >
            {content}
        </button>
    )
}

export default Button
