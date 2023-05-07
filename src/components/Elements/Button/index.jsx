import styles from './styles.module.scss';

export default function Button({ children, variant, size, onLoading, ...restProps }) {
    return (
        <>
            <button className={`${styles.button} ${onLoading ? styles.loading : ''} ${styles[variant]} ${styles[size]}`} {...restProps}>
                <div className={styles.spinner}><div></div></div>
                <span className={styles.text}>{children}</span>
            </button>
        </>
    )
}

// Variants: primary, success, danger, warning, info, dark