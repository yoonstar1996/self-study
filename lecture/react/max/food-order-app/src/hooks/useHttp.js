import { useEffect, useState, useCallback } from "react";

const sendHttpRequest = async (url, config) => {
  const res = await fetch(url, config);

  const resData = await res.json();

  if (!res.ok) {
    throw new Error(
      resData.message || "Something went wrong, failed to send request"
    );
  }

  return resData;
};

export const useHttp = (url, config, initialData) => {
  const [isLoading, setIsLoading] = useState(initialData);
  const [error, setError] = useState();
  const [data, setData] = useState();

  const sendRequest = useCallback(async () => {
    setIsLoading(true);
    try {
      const resData = await sendHttpRequest(url, config);
      setData(resData);
    } catch (error) {
      setError(error.message || "Something went wrong!");
    }
    setIsLoading(false);
  }, [url, config]);

  useEffect(() => {
    if ((config && (config.method === "GET" || !config.method)) || !config) {
      sendRequest();
    }
  }, [sendRequest, config]);

  return {
    data,
    isLoading,
    error,
    sendRequest,
  };
};

export default useHttp;
