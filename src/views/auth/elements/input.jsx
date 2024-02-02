import { useState } from "react";

import styles from "./styles.module.scss";

export default function Input({ label, id,...props }) {
    const [value, setValue] = useState("");

    return (
        <div className={`${styles.input} ${value ? styles.active : ''}`}>
            <label htmlFor={id}>{label}</label>
            <input type="text" id={id} value={value} onChange={(e) => setValue(e.target.value)} {...props} />
        </div>
    )
}