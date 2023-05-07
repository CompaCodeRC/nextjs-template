import styles from './styles.module.scss';

export default function Skeleton({ width, height }) {
    return (
        <div style={{width, height}}>
            <div className={styles.skeleton}></div>
        </div>
    )
};