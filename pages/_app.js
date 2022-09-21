import 'bootstrap/dist/css/bootstrap.css'
import '../styles/globals.css'
import {useEffect} from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";

function MyApp({Component, pageProps}) {

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle")
    }, [])

    return (
        <>
            <Head>
                <meta charSet={"utf-8"}/>
                <meta name={"mobile-web-app-capable"} content={"yes"}/>
                <meta name={"viewport"} content={"width=device-width, initial-scale=1, shrink-to-fit=no"}/>
                <meta name={"author"} content={"Ashish Kumar Bhoi"}/>
            </Head>
            <Component {...pageProps} />
            <footer className={styles.footer}>
                Ashish Kumar Bhoi &copy; 2022
            </footer>
        </>

    )
}

export default MyApp