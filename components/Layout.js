import Header from "./Header";
import Footer from "./Footer"
import Head from "next/head";

export default function Layout({ setOpen, children }) {
    return (
        <>
        <Head>
                <title>Divination</title>
                <meta name="description" content="Divination is a product consultancy making magic in the digital age" />
                <meta property="og:image" content="" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image" content="" />
                <meta property="og:image:width" content="300" />
                <meta property="og:image:height" content="300" />

                <meta property="og:url" content="https://www.divination.dev/" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Divination" />
                <meta property="og:description" content="Divination is a product consultancy making magic in the digital age" />

                <meta name="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://www.divination.dev/" />
                <meta name="twitter:title" content="Divination" />
                <meta name="twitter:description" content="Divination is a product consultancy making magic in the digital age" />
                <meta name="twitter:image" content="" />
        </Head>
        <div className="absolute left-8 md:left-10 right-8 md:right-10 mx-auto my-8 md:my-10 text-black bg-white border border-black shadow-xl shadow-black">
            <Header setOpen={setOpen} />
            {children}
            <Footer />
        </div>
        </>
    )
}