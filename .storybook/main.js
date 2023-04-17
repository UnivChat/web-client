const path = require("path");

module.exports = {
  stories: ["../src/**/*.stories.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "storybook-addon-next",
    "storybook-addon-next-router"
  ],
  framework: "@storybook/react",
  core: {
    builder: "@storybook/builder-webpack5"
  },
  webpackFinal: config => {
    // Default rule for images /\.(svg|ico|jpg|jpeg|png|gif|eot|otf|webp|ttf|woff|woff2|cur|ani|pdf)(\?.*)?$/

    config.resolve.alias = {
      ...config.resolve.alias,
      "~": path.resolve(__dirname, "../src/"),
      "@svgs": path.resolve(__dirname, "../src/assets/svgs")
    };

    const rules = config.module.rules;
    const fileLoaderRule = rules.find(rule => rule.test.test(".svg"));
    /**
     * svg는 기본 fileLoader 가 우선순위를 가져서 웹팩 설정이 먹히지 않는 이슈가 있습니다.
     * 하여 svg 파일만 기본 loader를 제외시키는 코드입니다.
     */
    fileLoaderRule.exclude = /\.svg$/;

    rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });
    return config;
  }
};
