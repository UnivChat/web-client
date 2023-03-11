export const getMediaQuery = (
  value: number,
  criteria: "max" | "min" = "max"
): string => `@media (${criteria}-width: ${value}px)`;
