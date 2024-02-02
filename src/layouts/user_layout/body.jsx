import styles from "./styles.module.scss";

export default function Body({ children }) {
    return (
        <div className={styles.body}>{children}</div>
    )
}