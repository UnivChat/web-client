import { css } from "@emotion/react";
import emotionReset from "emotion-reset";
import { ROOT_FONT_SIZE } from "~/constants";
import { media, vwMobile } from "~/utils";

export const resetCSS = css`
  ${emotionReset}
  /* 그밖에 글로벌 스타일 작성하기  */
  * {
    box-sizing: border-box;
  }

  html {
    font-size: 10px;
    will-change: font-size;
    height: 100%;

    ${media.tablet} {
      font-size: ${vwMobile(ROOT_FONT_SIZE)};
    }
  }

  body {
    height: 100%;
    will-change: overflow-y, position;
    font-family: "NanumGothic", "NanumSquare", sans-serif;

    &.scroll-lock,
    html.scroll-lock {
      position: relative;
      height: 100vh;
      overflow: hidden;
    }
  }

  a {
    text-decoration: none;
    cursor: pointer;
    color: inherit;
  }

  ul {
    list-style: none;
  }

  input,
  textarea {
    outline: none;
    border: none;
    font-family: inherit;
  }

  button {
    background-color: transparent;
    cursor: pointer;
    padding: 0;
    margin: 0; // ios default css
    border: none;
    color: inherit;

    &:disabled {
      cursor: not-allowed;
    }
  }

  svg,
  img {
    vertical-align: top;
  }
`;
