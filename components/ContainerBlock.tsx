import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Script from 'next/script';
import Footer from "./Footer";
import Header from "./Header";
import { Analytics } from '@vercel/analytics/react';


export default function ContainerBlock({children, ...customMeta}) {
    const router = useRouter();
    const meta = {
        title: "Purushothama Reddy M",
        description: `I've been developing websites for 5 years straight. Get in touch with me to know more.`,
        image: "/profile-pic.JPG",
        type: "website",
        ...customMeta
    }
    return (
        <>
            <div className="dark:bg-gray-800">
                <Head>
                    <title>{meta.title}</title>
                    <meta name="robots" content="follow, index" />
                    <meta content={meta.description} name="description" />
                    <meta property="og:url" content={router.asPath} />
                    <link rel="canonical" href={router.asPath} />
                    <meta property="og:type" content={meta.type} />
                    <meta property="og:site_name" content="Purushothama Reddy M" />
                    <meta property="og:description" content={meta.description} />
                    <meta property="og:title" content={meta.title} />
                    <meta property="og:image" content={meta.image} />
                </Head>
                <Script id="google-tag-manager" strategy="afterInteractive">
                    {`
                        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
                        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
                        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
                        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
                        })(window,document,'script','dataLayer','GTM-P58X7SNL');
                    `}
                </Script>
                <Header />
                <main className="max-w-6xl mx-auto mb-20">
                    <div>{children}</div>
                </main>
                <noscript><iframe src="https://www.googletagmanager.com/ns.html?id=GTM-P58X7SNL"
                height="0" width="0" style={{ display: 'none', visibility: 'hidden' }}></iframe></noscript>
                <Footer />
            </div>
            <Analytics />
        </>
    );
}
