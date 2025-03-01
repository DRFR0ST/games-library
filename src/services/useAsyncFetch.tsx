import { useState, useEffect } from "react";

const useAsyncFetch = (url: string) => {
  const [data, setData] = useState([]);

  async function getData() {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
  }

  useEffect(() => {
    getData();
  }, []);

  return data;
};

export default useAsyncFetch;
