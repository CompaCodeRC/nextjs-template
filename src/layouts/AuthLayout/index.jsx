import Head from 'next/head';
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import styles from './styles.module.scss';

export default function AuthLayout({ children, title }) {
    const router = useRouter();
    const token = getCookie('token');
    const [isLogged, setIsLogged] = useState(false);
    const title_format = process.env.NEXT_PUBLIC_TITLE + (title ? ' - ' + title : '');

    useEffect(() => {
        if (token) {
            router.push('/dashboard');
        } else {
            setIsLogged(true);
        }
    }, []);

    if (!isLogged) return null;
    return (
        <>
            <Head>
                <title>{title_format}</title>
                <meta name="description" content="La forma mas conveniente de comprar y vender monedas digitales en Perú"/>
                <meta name="keywords" content="Apolobit, Criptomonedas"/>
                <meta name="og:title" property="og:title" content={`${title_format}`} />
                <meta name="og:description" property="og:description" content="La forma mas conveniente de comprar y vender monedas digitales en Perú"/>
                <meta name="og:image" property="og:image" content="#"/>
            </Head>
            <div>
                {children}
            </div>
        </>
    )
}