import Layout from "src/Layout/Layout";
import '../styles/global.scss';
import store from 'src/store';
import { Provider } from 'react-redux';

import { registerLicense} from '@syncfusion/ej2-base';
registerLicense(process.env.NEXT_PUBLIC_LICENSE_KEY)

export default function App({ Component, pageProps }) {
  return (
    <Layout>
      <Provider store={store}>
        <Component {...pageProps} />
      </Provider>
    </Layout>
  )
}