import React from 'react';
import {Provider} from 'mobx-react'

import Head from 'next/head';
import Nav from '../components/views/Nav';
import Intro from '../components/views/Intro';
import About from '../components/views/About';
import Services from '../components/views/Services';
import Portfolio from '../components/views/Portfolio';
import Contact from '../components/views/Contact';

import initializeStore from '../components/stores/RootStore';

import { createMuiTheme, ThemeProvider } from "@material-ui/core/styles";

import 'bootstrap/dist/css/bootstrap.min.css'
import 'animate.css/animate.min.css';
import './Index.css';


const theme = createMuiTheme({
  palette: {
    primary: {
      main : '#48abec',
      contrastText: '#fff',
    }
   }
});

const App = () => {

  const mobxStore = initializeStore();

  return (
    <ThemeProvider theme={theme}>
      <Provider {...mobxStore}>
        <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no" />
        <meta name="robots" content="index, follow"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name="description" content="Behzad Shirani Personal Website, Software Developer" />
        <meta  property="og:title" content="Behzad Shirani" />
        <meta property="og:type" content="page" />
        <meta property="og:url" content="https://behzadshirani.ir" />
        <meta property="og:image" content="https://behzadshirani.ir/images/profile.png" />
        <meta property="og:description" content="Behzad Shirani Personal Website, Software Developer" />
        <meta name="google-site-verification" content="GdUnsk8HS4a4EtJk5Oybszb-w6ynARkK3Gs_rqoXQ9A" />


        <title>Behzad Shirani - Software Developer</title>
        </Head>
        <Nav />
        <Intro />
        <About />
        <Services />
        <Portfolio />
        <Contact />
      </Provider>
    </ThemeProvider>
  );
}

export default App;