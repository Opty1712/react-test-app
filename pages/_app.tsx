import type { AppProps } from 'next/app';
import { AppThemeProvider } from '../src/AppThemeProvider';

const App = ({ Component, pageProps }: AppProps) => {
  return (
    <AppThemeProvider>
      <Component {...pageProps} />
    </AppThemeProvider>
  );
};

export default App;
