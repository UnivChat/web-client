import { RouterContext } from "next/dist/shared/lib/router-context"; // next 12

export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  nextRouter: {
    Provider: RouterContext.Provider
  },
  viewport: {
    viewports: [
      {
        name: "iPhone SE",
        styles: {
          width: "375px",
          height: "667px"
        }
      }
    ],
    defaultViewport: "iPhone SE"
  }
};
