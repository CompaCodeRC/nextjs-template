import Head from "next/head";
import { getCookie } from 'cookies-next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

import Navbar from "./navbar";
import Body from "./body";
import Footer from "./footer";

export default function UserLayout({ children, title }) {
    const router = useRouter();
    const token = getCookie('token');
    const [isLogged, setIsLogged] = useState(false);
    const title_format = process.env.NEXT_PUBLIC_TITLE + (title ? ' - ' + title : '');

    useEffect(() => {
        if (!token) {
            router.push('/login');
        } else {
            setIsLogged(true);
        }
    }, []);

    if (!isLogged) return null;
    return (
        <>
            <Head>
                <title>{title_format}</title>
            </Head>
            <Navbar/>
            <Body>
                {children}
            </Body>
            <Footer/>
        </>
    )
}