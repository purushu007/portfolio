import React from "react";
import Head from "next/head";
import { useRouter } from "next/router";
import Footer from "./Footer";
import Header from "./Header";

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
            <Header />
            <main className="w-full mb-20">
                <div>{children}</div>
            </main>
            <Footer />
        </div>
    );
}