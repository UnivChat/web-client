export const typedFetch = <T = unknown>(
  ...params: Parameters<typeof fetch>
) => {
  return fetch(...params)
    .then<T>(res => res.json())
    .catch(() => undefined);
};
