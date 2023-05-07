import styles from './styles.module.scss';

export default function Select({ label, id, note, options = [], selected, ...restProps }) {
    return (
        <div className={styles.select}>
            <div className={styles.label}>
                <label htmlFor={id}>{label}</label>
                {note && <span>{note}</span>}
            </div>
            <div className={styles.input}>
                <select name={id} id={id} defaultValue={selected} key={selected} {...restProps}>
                    {options.map((option, index) => (
                        <option key={index} value={option.value}>{option.text}</option>
                    ))}
                </select>
            </div>
        </div>
    )
}

// Options: text, value