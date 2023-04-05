import { css } from "@emotion/react";
import emotionReset from "emotion-reset";
import { ROOT_FONT_SIZE } from "~/constants";
import { media, vw, vwMobile } from "~/utils";

export const resetCSS = css`
  ${emotionReset}
  /* 그밖에 글로벌 스타일 작성하기  */
  * {
    box-sizing: border-box;
  }

  @font-face {
    font-family: "NanumSquare";
    src: url("fonts/NanumSquareR.ttf");
  }
  @font-face {
    font-family: "NanumSquareBold";
    src: url("fonts/NanumSquareB.ttf");
  }

  @font-face {
    font-family: "NanumSquareExtraBold";
    src: url("fonts/NanumSquareEB.ttf");
  }

  @font-face {
    font-family: "NanumSquareLight";
    src: url("fonts//NanumSquareL.ttf");
  }

  html {
    font-size: ${vw(ROOT_FONT_SIZE)};
    will-change: font-size;
    height: 100%;

    ${media.tablet} {
      font-size: ${vwMobile(ROOT_FONT_SIZE)};
    }
  }

  body {
    height: 100%;
    will-change: overflow-y, position;

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

    &:disabled {
      cursor: not-allowed;
    }
  }

  svg,
  img {
    vertical-align: top;
  }
`;
