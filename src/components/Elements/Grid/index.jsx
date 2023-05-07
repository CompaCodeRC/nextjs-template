import styles from './styles.module.scss';

export default function Grid({ children, col, gap }) {
    return (
        <div className={styles.grid} style={{gridTemplateColumns: 'repeat('+(col || 1)+', 1fr)', gap: (gap || 0)+'rem'}}>
            {children}
        </div>
    )
}