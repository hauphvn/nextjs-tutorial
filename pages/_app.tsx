import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ThemeProvider } from 'styled-components';
import Header from "@/layout/Header";
import Footer from "@/layout/Footer";
import 'styles/layout.scss';
const theme = {
  colors: {
    primary: '#355C7D'
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  return <ThemeProvider theme={theme}>
    <>
      <Header/>
      <div className={'child-comps'}>
      <Component  {...pageProps} />
      </div>
      <Footer/>
    </>
  </ThemeProvider>
}

export default MyApp
