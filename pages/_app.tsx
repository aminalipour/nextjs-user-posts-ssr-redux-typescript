import React from 'react';
import App, {AppInitialProps, AppContext} from 'next/app';
import {wrapper} from '../store';
import 'bootstrap/dist/css/bootstrap.css'
import 'react-multi-carousel/lib/styles.css';

class MyApp extends App<AppInitialProps> {


    public render() {
        const {Component, pageProps} = this.props;

        return (
            <Component {...pageProps} />
        );
    }
}

export default wrapper.withRedux(MyApp);