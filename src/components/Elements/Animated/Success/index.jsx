import styles from './styles.module.scss';

export default function Success() {
    return (
        <div className={styles.success_checkmark}>
            <div className={styles.check_icon}>
                <span className={`${styles.icon_line} ${styles.line_tip}`} ></span>
                <span className={`${styles.icon_line} ${styles.line_long}`} ></span>
                <div className={styles.icon_circle}></div>
                <div className={styles.icon_fix}></div>
            </div>
        </div>
    )
}