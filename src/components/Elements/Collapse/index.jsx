import { useState } from 'react';
import styles from './styles.module.scss';

export default function Collapse({ title, children }) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleOpen = () => setIsOpen(!isOpen);

    return (
        <div className={styles.collapse}>
            <div className={styles.header} onClick={toggleOpen}>
                <div>{title}</div><div>{isOpen ? "-" : "+"}</div>
            </div>
            {isOpen && (
                <div className={styles.content}>
                    {children}
                </div>
            )}
        </div>
    )
};