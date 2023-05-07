import styles from './styles.module.scss';

export default function Card({ children, padding, bg, width, title }) {
    return (
        <div className={styles.card} style={{padding: padding+'rem', backgroundColor: bg, width: width}}>
            {title &&
            <div className={styles.header}>
                <div className={styles.title}>{title}</div>
            </div>}
            {children}
        </div>
    )
};