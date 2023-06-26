export type fetchClient = <T>(
  url: RequestInfo | URL,
  options?: RequestInit
) => Promise<T>;

export const fetchApi: fetchClient = (
  url: RequestInfo | URL,
  options?: RequestInit
): Promise<any> => {
  return fetch(url, options)
    .then((res) => res.json())
    .catch((err) => console.error(err));
};
