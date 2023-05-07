import styles from './styles.module.scss';

export default function Flex({ children, align, justify, gap }) {
    return (
        <div className={styles.flex} style={{alignItems: align, gap: gap+'rem'}}>
            {children}
        </div>
    )
}