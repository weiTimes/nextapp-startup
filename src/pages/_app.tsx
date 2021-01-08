import { createGlobalStyle, ThemeProvider } from 'styled-components';
import { ConfigProvider } from 'antd';
import { RecoilRoot } from 'recoil';
import { QueryClientProvider, QueryClient } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import zhCN from 'antd/lib/locale/zh_CN';
import 'antd/dist/antd.css';

import { theme } from '@/styles/theme';

interface IGlobalProps {
  whiteColor?: boolean;
}

const queryClient = new QueryClient();

const GlobalStyle = createGlobalStyle<IGlobalProps>`
  * {
    margin: 0;
    padding: 0;
    font-family: -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    box-sizing: border-box;
  }

  a {
    color: inherit;
    text-decoration: none;
  }

  body {
    color: ${(props) => (props.whiteColor ? 'white' : '#333')};
    background-color: ${({ theme }) => theme.colors.secondary};
  }
`;

function MyApp({ Component, pageProps }) {
  return (
    <ConfigProvider locale={zhCN}>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />

        <RecoilRoot>
          <ThemeProvider theme={theme}>
            <GlobalStyle />
            <Component {...pageProps} />
          </ThemeProvider>
        </RecoilRoot>
      </QueryClientProvider>
    </ConfigProvider>
  );
}

export default MyApp;
