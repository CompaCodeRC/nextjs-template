import { useState, useEffect } from "react";

const getStorage = (key) => {
    const [value, setValue] = useState(null);
    useEffect(() => {
        const storage = localStorage.getItem(key);
        if (storage) {
            setValue(JSON.parse(storage));
        }
    }, [key]);
    return value;
}

const setStorage = (key, value) => {
    localStorage.setItem(key, JSON.stringify(value));
}

export { getStorage, setStorage };