import type { AppProps } from 'next/app';
import Footer from '../components/shared/Footer';
import GlobalStyle from './_globalStyles';

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <Component {...pageProps} />
      <Footer />
    </>
  );
}

export default MyApp;
