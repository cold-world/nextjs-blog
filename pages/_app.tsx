import '../styles/globals.css';
import type { AppProps } from 'next/app';
import { Layout } from '../components';
import { StatusProvider } from '../context/context';
import Head from 'next/head';

export default function App({ Component, pageProps }: AppProps) {
  return (
    <StatusProvider>
      <Layout>
        <Head>
          <meta name='viewport' content='width=device-width , initial-scale=1' />
        </Head>
        <Component {...pageProps} />
      </Layout>
    </StatusProvider>
  );
}
