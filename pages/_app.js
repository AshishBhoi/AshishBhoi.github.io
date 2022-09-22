import 'bootstrap/dist/css/bootstrap.css'
import '@fortawesome/fontawesome-free/css/all.css'
import '../styles/globals.css'
import {useEffect} from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import {GoogleReCaptchaProvider} from "react-google-recaptcha-v3";

const SITE_KEY = process.env.NEXT_PUBLIC_RECAPTCHA_KEY;

function MyApp({Component, pageProps}) {

    useEffect(() => {
        import("bootstrap/dist/js/bootstrap.bundle")
        import("@fortawesome/fontawesome-free/js/all")
    }, [])

    return (
        <GoogleReCaptchaProvider reCaptchaKey={SITE_KEY} scriptProps={{
            async: false,
            defer: false,
            appendTo: "head",
            nonce: undefined,
        }}>
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
        </GoogleReCaptchaProvider>

    )
}

export default MyApp