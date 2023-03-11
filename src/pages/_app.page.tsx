import { store } from "@client-state/index";
import {
  Hydrate,
  QueryClient,
  QueryClientProvider
} from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Provider } from "react-redux";
import { RootLayout } from "~/layouts";
import type { AppPropsWithLayout } from "./app.types";

const queryClient = new QueryClient();

export default function App({ Component, pageProps }: AppPropsWithLayout) {
  return (
    <QueryClientProvider client={queryClient}>
      <Hydrate state={pageProps.dehydratedState}>
        <Provider store={store}>
          <RootLayout layoutConfig={Component.layoutConfig}>
            <Component {...pageProps} />
          </RootLayout>
          <ReactQueryDevtools initialIsOpen={false} />
        </Provider>
      </Hydrate>
    </QueryClientProvider>
  );
}
