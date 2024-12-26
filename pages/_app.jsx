import Layout from "src/Layout/Layout";
import '../styles/global.scss';
import store from 'src/store';
import { Provider } from 'react-redux';

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  )
}
