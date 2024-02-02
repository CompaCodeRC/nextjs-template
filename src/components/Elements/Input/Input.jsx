import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import styles from './styles.module.scss';

export default function Input({ label, id, note, type, ...restProps }) {
    const [showPassword, setShowPassword] = useState(false);
    return (
        <div className={styles.element}>
            <div className={styles.label}>
                <label htmlFor={id}>{label}</label>
                {note && <span>{note}</span>}
            </div>
            <div className={styles.input}>
                <input id={id} name={id} type={showPassword ? 'text' : type} {...restProps}/>
                {type === 'password' &&
                    <div className={styles.show_password}>
                        {showPassword ? <AiOutlineEyeInvisible onClick={() => setShowPassword(!showPassword)} /> : <AiOutlineEye onClick={() => setShowPassword(!showPassword)} />}
                    </div>
                }
            </div>
        </div>
    )
}