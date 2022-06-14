async function httpClient(URL, options = {}) {
  const commonOptions = {
    headers: { "x-api-key": "f067da81-0d36-4d93-97a7-a66326d9ba43" },
  };
  options.headers = { ...commonOptions.headers, ...options.headers };

  return await fetch("https://api.thecatapi.com" + URL, options);
}

export default httpClient;
