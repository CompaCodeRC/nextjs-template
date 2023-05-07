import { useState, useEffect, useRef } from 'react';
import { BsChevronDown } from "react-icons/bs";

import styles from './styles.module.scss';

export default function Dropdown({ children, title, arrow }) {
    const dropdownRef = useRef(null);
    const [active, setActive] = useState('');

    const toggle_active = () => {
        if (active === '') return setActive('active');
        if (active === 'desactive') return setActive('active');
        setActive('desactive');
        setTimeout(() => setActive(''), 300);
    };

    useEffect(() => {
        const on_click_outside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setActive('');
            }
        };

        document.addEventListener("mousedown", on_click_outside);
        return () => {
            document.removeEventListener("mousedown", on_click_outside);
        };
    }, [dropdownRef]);

    return (
        <div className={styles.dropdown} onClick={toggle_active} ref={dropdownRef}>
            <div className={styles.title}>
                <div>{title}</div>
                {arrow && <div className={`${styles.arrow} ${styles[active]}`}><BsChevronDown/></div>}
            </div>
            <div className={`${styles.content} ${styles[active]}`}>
                {children}
            </div>
        </div>
    )
};