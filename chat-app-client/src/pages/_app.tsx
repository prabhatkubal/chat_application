import type { AppProps } from "next/app";
import { ThemeProvider } from "styled-components";
import GlobalStyle from "../styles/globalstyles";
import { ApolloProvider } from "@apollo/client";
import client from "../services/apiInstance";
import { ThemeContextProvider, useThemeContext } from "../theme/themeContext";

function AppWithTheme({ Component, pageProps }: AppProps) {
  const { theme } = useThemeContext();

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default function App(props: AppProps) {
  return (
    <ApolloProvider client={client}>
      <ThemeContextProvider>
        <AppWithTheme {...props} />
      </ThemeContextProvider>
    </ApolloProvider>
  );
}
