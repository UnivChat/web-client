export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
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
