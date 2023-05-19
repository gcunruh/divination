import Header from "./Header";
import Footer from "./Footer"
import Head from "next/head";

export default function Layout({ setOpen, children }) {
    return (
        <body className="h-full">
        <Head>
                <title>Divination</title>
                <meta name="description" content="Divination is a product consultancy making magic in the digital age" />
                <meta property="og:image" content="https://divination.s3.us-west-2.amazonaws.com/divination_og.png" />
                <meta property="og:image:width" content="1200" />
                <meta property="og:image:height" content="630" />
                <meta property="og:image" content="https://divination.s3.us-west-2.amazonaws.com/divination_og.png" />
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
                <meta name="twitter:image" content="https://divination.s3.us-west-2.amazonaws.com/divination_og.png" />
        </Head>
        <div className="min-h-full">
            <Header setOpen={setOpen} />
            {children}
            <Footer />
        </div>
        </body>
    )
}