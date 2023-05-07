import styles from './styles.module.scss';

export default function Tooltip({ children, text, check, ...restProps }) {
    return (
        <div className={`${styles.tooltip} ${check && styles.check}`} {...restProps}>
            <span>{children}</span>
            <div className={styles.drop}>
                {text}
            </div>
        </div>
    )
}

// Variants: primary, success, danger, warning, info, dark