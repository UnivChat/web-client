/* eslint-disable @typescript-eslint/consistent-type-imports */
declare module Style {
  type Color = typeof import("~/constants").colors;
  type ColorKey = keyof Color;
  type ColorValue = Util.ValueOf<Color>;

  interface Layout {
    _width?: number;
    _height?: number;
  }
}
