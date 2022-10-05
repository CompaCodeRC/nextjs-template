import Head from "next/head"

export default function BaseLayout({ children, title }) {
    return (
        <>
            <Head>
                <title>{process.env.NEXT_PUBLIC_TITLE}{title && ' - '+title}</title>
                <meta name="description" content="Esto es una descripcion"/>
                <meta name="keywords" content="Key, Word, Nextjs"/>
                <meta name="og:title" property="og:title" content={`${process.env.NEXT_PUBLIC_TITLE}${title && ' - '+title}`} />
                <meta name="og:description" property="og:description" content="Esto es una descripcion"/>
                <meta name="og:image" property="og:image" content="#"/>
            </Head>
            <div>
                {children}
            </div>
        </>
    )
}
