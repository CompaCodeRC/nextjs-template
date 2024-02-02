import { setCookie } from 'cookies-next';
import { useRouter } from 'next/router';

import { setStorage } from '@utils/local_storage';
import Input from "./elements/input";
import Button from "@components/Elements/Button";
import { useLoginMutation } from "@store/api";

import styles from "./styles.module.scss";

export default function LoginView() {
    const [login, { isLoading }] = useLoginMutation();
    const router = useRouter();

    const on_submit = (e) => {
        e.preventDefault();
        const email = e.target.email.value;
        const password = e.target.password.value;
        login({ email, password }).then(res => {
            if (res.error) return;
            setCookie('token', res.data.token, {expires: new Date(Date.now() + 1000 * 60 * 60 * 2)}); // expire in 2 hours
            setStorage('user', res.data.user);
            router.push('/dashboard');
        });
    };

    return (
        <form className={styles.box} onSubmit={on_submit}>
            <h1>Capital CashX</h1>
            <Input id={'email'} label={'Correo'}/>
            <Input id={'password'} label={'Contraseña'} type={'password'}/>
            <Button variant={'primary'} onLoading={isLoading}>Acceder</Button>
        </form>
    )
}