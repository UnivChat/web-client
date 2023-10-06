import { css } from "@emotion/react";
import emotionReset from "emotion-reset";
import { ROOT_FONT_SIZE } from "~/constants";
import { media, pxToRem, vwMobile } from "~/utils";

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

  .rbc-day-bg + .rbc-day-bg {
    border-left: none !important;
  }

  .rbc-header {
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-left: none !important;
  }

  .rbc-month-view {
    border: none !important;
  }

  .rbc-event-content {
    color: #1f1f1f;
  }

  .rbc-toolbar button {
    border: none !important;
    font-size: ${pxToRem(16)};
  }

  .rbc-header {
    color: #767676;
    font-size: ${pxToRem(12)};
  }

  .rbc-header:first-child {
    color: #e33f3f;
  }

  .rbc-toolbar-label {
    color: #313131;
    font-size: ${pxToRem(16)};
    font-weight: bold;
  }

  .rbc-button-link {
    color: #1f1f1f;
  }

  .rbc-toolbar {
    margin-bottom: 0;
    padding: ${pxToRem(14)} ${pxToRem(10)} ${pxToRem(7)} ${pxToRem(10)};
  }

  .rbc-today {
    background-color: #d9e0ef;
  }

  .rbc-toolbar button:hover {
    background-color: transparent;
  }
`;
