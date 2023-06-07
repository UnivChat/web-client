export const typedFetch = async <T = unknown>(
  ...params: Parameters<typeof fetch>
) => {
  const res = await fetch(...params).then<T>(res => res.json());

  return res;
};
