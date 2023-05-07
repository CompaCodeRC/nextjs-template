import Head from "next/head"

export default function BaseLayout({ children, title }) {
    const title_format = process.env.NEXT_PUBLIC_TITLE + (title ? ' - ' + title : '');

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
