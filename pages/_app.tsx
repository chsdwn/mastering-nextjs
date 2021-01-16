import { AppProps } from 'next/app';
import { ThemeProvider } from 'styled-components';

import '../styles/globals.scss';

const theme = {
  colors: {
    primary: '#ffff00',
  },
};

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider theme={theme}>
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
