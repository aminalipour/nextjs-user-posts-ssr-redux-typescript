import React from 'react';
// Modules
import Document, {Html, Head, Main, NextScript} from 'next/document';
// MUI Core

class MyDocument extends Document {
    render() {
        return (
            <Html lang="en">
                <Head>
                    <link rel="stylesheet"
                          href="https://fonts.googleapis.com/css2?family=Open+Sans:wght@300;400;600;700&display=swap"/>
                </Head>
                <body>
                <Main/>
                <NextScript/>
                </body>
            </Html>
        );
    }
}

MyDocument.getInitialProps = async (ctx) => {


    const initialProps = await Document.getInitialProps(ctx);

    return {
        ...initialProps,
        // Styles fragment is rendered after the app and page rendering finish.
        styles: [
            ...React.Children.toArray(initialProps.styles),
        ],
    };
};

export default MyDocument;