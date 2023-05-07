import styles from './styles.module.scss';

export default function Badge({ children, variant, size, ...restProps }) {
    return (
        <span className={`${styles.badge} ${styles[variant]} ${styles[size]}`} {...restProps}>
            {children}
        </span>
    )
}

// Variants: primary, success, danger, warning, info, dark