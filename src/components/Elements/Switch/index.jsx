import { useState } from "react";

import styles from "./styles.module.scss";

export default function Switch({ checked, onChange }) {
    return (
        <label className={styles.switch}>
            <input type="checkbox" name={'switch'} checked={checked || false} onChange={onChange}/>
            <span className={styles.slider}></span>
        </label>
    )
};