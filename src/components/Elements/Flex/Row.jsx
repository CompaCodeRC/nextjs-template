import styles from './styles.module.scss';

export default function Row({ children, col }) {
    return (
        <div className={styles.row} style={{flex: ((col || 5) * 10) + '%', width: (col || 5) * 10 + '%'}}>
            {children}
        </div>
    )
}