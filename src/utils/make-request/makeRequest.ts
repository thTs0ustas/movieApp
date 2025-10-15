type Options = RequestInit;

export const makeRequest = async (url: string, options?: Options) => {
  const headers = {
    'Content-Type': 'application/json',
    ...options?.headers,
  };

  const fetchOptions = {
    ...options,
    headers,
  };

  const response = await fetch(url, fetchOptions);
  return response?.ok
    ? Promise.resolve(response.json().catch(() => ({})))
    : response
        ?.json()
        .then((err) => Promise.reject({ ...err, status: response.status }));
};
