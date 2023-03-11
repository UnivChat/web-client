declare module Util {
  type ValueOf<T> = T[keyof T];
}
