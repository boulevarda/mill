import Document, { Html, Head, Main, NextScript } from 'next/document';

import BreakpointIndicator from '../components/BreakpointIndicator';
import { AppConfig } from '../utils/AppConfig';

const isDev = process.env.NODE_ENV === 'development';

// Need to create a custom _document because i18n support is not compatible with `next export`.
class MyDocument extends Document {
  render() {
    return (
      <Html lang={AppConfig.locale}>
        <Head />
        <body>
          <Main />
          <NextScript />
          {isDev && <BreakpointIndicator />}
        </body>
      </Html>
    );
  }
}

export default MyDocument;
