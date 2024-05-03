import styles from "./styles.module.scss";

export default function Count ({ title, description, counter }) {
    return (
        <div className={styles.count}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.counter}>{counter}</div>
        </div>
    )
}