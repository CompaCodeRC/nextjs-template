import styles from "./styles.module.scss";

export default function Stats({ title, description, counter }) {
    return (
        <div className={styles.stats}>
            <div className={styles.title}>{title}</div>
            <div className={styles.description}>{description}</div>
            <div className={styles.counter}>{counter}</div>
        </div>
    )
}