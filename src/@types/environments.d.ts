declare module NodeJS {
  interface ProcessEnv extends NodeJS.ProcessEnv {
    NEXT_PUBLIC_API_URL: string;
    NEXT_PUBLIC_SOKET_API_URL: string;
  }
}
