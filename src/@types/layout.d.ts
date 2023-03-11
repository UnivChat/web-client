declare module Layout {
  type Case = "default" | "tab";
  type Config = {
    layoutConfig?: {
      case: Case;
    };
  };
}
