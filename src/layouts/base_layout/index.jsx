import Head from "next/head";

export default function BaseLayout({ children, title }) {
    const title_format = process.env.NEXT_PUBLIC_TITLE + (title ? ' - ' + title : '');

    return (
        <>
            <Head>
                <title>{title_format}</title>
                <meta name="description" content={process.env.NEXT_PUBLIC_DESCRIPTION}/>
                <meta name="keywords" content={process.env.NEXT_PUBLIC_KEYWORDS}/>
                <meta name="og:title" property="og:title" content={`${title_format}`} />
                <meta name="og:description" property="og:description" content={process.env.NEXT_PUBLIC_DESCRIPTION}/>
                <meta name="og:image" property="og:image" content={process.env.NEXT_PUBLIC_OG_IMAGE}/>
            </Head>
            <div>
                {children}
            </div>
        </>
    )
}
