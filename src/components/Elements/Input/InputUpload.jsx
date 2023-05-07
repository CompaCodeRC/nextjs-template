import { useState } from "react";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";
import Button from "../Button";
import styles from './styles.module.scss';

export default function InputUpload({ label, id, ...restProps }) {
    const [name, setName] = useState('Elegir Archivo');
    const [image, setImage] = useState(null);
    const on_change = (e) => {
        const file = e.target.files[0];
        setName(file.name);

        const reader = new FileReader();
        reader.onloadend = () => {
            setImage(reader.result);
        }
        reader.readAsDataURL(file);
    };

    return (
        <div className={styles.upload}>
            {image && <img src={image} alt="frontal" />}
            <label htmlFor={id}>{image ? 'Cambiar' : 'Subir'}</label>
            <input id={id} type="file" onChange={on_change} hidden/>
        </div>
    )
}