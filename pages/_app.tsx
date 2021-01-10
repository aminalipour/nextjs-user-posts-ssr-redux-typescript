import React from 'react';
// Modules
import {AppProps} from 'next/app';
import Head from 'next/head';
import 'bootstrap/dist/css/bootstrap.min.css'


const MyApp: React.FC<AppProps> = ({Component, pageProps}) => {
    React.useEffect(() => {
        // Remove the server-side injected CSS.
        const jssStyles = document.querySelector('#jss-server-side');
        if (jssStyles && jssStyles.parentElement) {
            jssStyles.parentElement.removeChild(jssStyles);
        }
    }, []);
    return (
        <>
            <Head>
                <title>My App</title>
                <meta name="viewport" content="minimum-scale=1, initial-scale=1, width=device-width"/>
            </Head>
            <Component {...pageProps} />
        </>
    );
};

export default MyApp;