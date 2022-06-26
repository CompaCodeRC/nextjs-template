import ReactModal from 'react-modal';
import { IoClose } from "react-icons/io5";

import styles from './Modals.module.scss';

export const Modal = ({ children, isOpen, onClose, title }) => {
    return (
        <ReactModal isOpen={isOpen} onRequestClose={onClose}>
            <div className={styles.modal}>
                <div className={styles.header}>
                    <div className={styles.title}>{title}</div>
                    <IoClose onClick={onClose} />
                </div>
                {children}
            </div>
        </ReactModal>
    )
}