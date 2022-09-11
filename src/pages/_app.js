import Head from 'next/head';
import Modal from 'react-modal';

import '@styles/global.scss';

function App({ Component, pageProps }) {
  Modal.setAppElement('#__next');
  const getLayout = Component.getLayout || (page => page);
  return getLayout(
      <>
        <Head>
            <meta name='viewport' content='initial-scale=1.0, width=device-width' />
        </Head>
        <Component {...pageProps} />
      </>
  );
}

export default App;
