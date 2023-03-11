import type { DehydratedState } from "@tanstack/react-query";
import type { NextPage } from "next";
import type { AppProps } from "next/app";

export type AppDehydratedState = {
  dehydratedState: DehydratedState;
};

export type NextPageWithLayout<P = AppDehydratedState, IP = P> = NextPage<
  P,
  IP
> &
  Layout.Config;

export type AppPropsWithLayout = AppProps<AppDehydratedState> & {
  Component: NextPageWithLayout;
};
