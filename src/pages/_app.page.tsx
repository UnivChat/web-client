import { store } from "@client-state/index";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { RootLayout } from "~/layouts";
import "~/styles/font-face.css";
import Head from "next/head";
import type { AppPropsWithLayout } from "./app.types";
import { WebSocketProvider } from "./chat/room/class.provider";

const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      onError: error => {
        console.log(error);
      },
      refetchOnWindowFocus: false
    }
  }
});

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <Head>
            <meta
              name="viewport"
              content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no"
            />
          </Head>
          <RootLayout layoutConfig={Component.layoutConfig}>
            <WebSocketProvider>
              <Component {...pageProps} />
            </WebSocketProvider>
          </RootLayout>
          {/* <ReactQueryDevtools initialIsOpen={false} /> */}
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}
