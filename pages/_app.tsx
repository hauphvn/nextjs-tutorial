import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import 'styles/layout.scss';
import {SessionProvider} from "next-auth/react";

const theme = {
  colors: {
    primary: '#355C7D'
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return (<SessionProvider session={pageProps.session}>
    <ThemeProvider theme={theme}>
      <>
        <Header/>
        <div className={'child-comps'}>
          <Component  {...pageProps} />
        </div>
        <Footer/>
      </>
    </ThemeProvider>
  </SessionProvider>)
}

export default MyApp
