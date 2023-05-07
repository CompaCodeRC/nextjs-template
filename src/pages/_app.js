import { Provider } from 'react-redux';
import { store } from '@store/index';
import { Toaster } from 'react-hot-toast';

import Head from 'next/head';
import Modal from 'react-modal';

import '@styles/global.scss';

function App({ Component, pageProps }) {
  Modal.setAppElement('#__next');
  const getLayout = Component.getLayout || (page => page);
  return (
    <Provider store={store}>
      {getLayout(
        <>
          <Head>
              <meta name='viewport' content='initial-scale=1.0, width=device-width' />
          </Head>
            <Component {...pageProps} />
          <Toaster />
        </>
      )}
    </Provider>
  );
}

export default App;