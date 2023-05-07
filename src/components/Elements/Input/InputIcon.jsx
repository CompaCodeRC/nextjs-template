import { useState } from 'react';

import Dropdown from '../Dropdown';

import styles from './styles.module.scss';

export default function InputIcon({ label, id, options, on_change, ...restProps }) {
    const [selected, setSelected] = useState(0);
    const on_change_select = (val) => {
        setSelected(val);
        on_change(options[val]);
    };

    return (
        <div className={styles.e_input_icon}>
            <label>{label}</label>
            <div className={styles.input_icon}>
                <div className={styles.icon}>
                    <img src={`/img/icons/crypto/${options[selected]?.symbol.toLowerCase()}-alt.webp`} />
                </div>
                <div className={styles.input}>
                    {options.length > 1
                    ?<>
                    <Dropdown title={<>{options[selected]?.name}</>} arrow={true}>
                        <div className={styles.dropdown}>
                            {options.map((val, i) => (
                                <div className={styles.item} key={i} onClick={() => on_change_select(i)}>
                                    <img src={`/img/icons/crypto/${val.symbol?.toLowerCase()}-select.webp`} alt={val.symbol} />
                                    <span>{val.name}</span>
                                </div>
                            ))}
                        </div>
                    </Dropdown>
                    <input type="text" id={id} value={options[selected].id} hidden/>
                    </>
                    :<input {...restProps}/>}
                </div>
            </div>
        </div>
    )
};