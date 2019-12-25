import { useState, useEffect } from "react";
import request from './request';

function useFetch(initialUrl) {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(false);
  const [url, setUrl] = useState(initialUrl);

  useEffect(() => {
    let isSubscribed = true;
    setLoading(true);
    async function fetchData() {
      const res = await request(url);
      if (isSubscribed) {
        setData(res);
      }
      setLoading(false);
    }
    fetchData();
    return () => { isSubscribed = false }; // To fix, cancel all subscriptions and asynchronous tasks in a useEffect cleanup function.
  }, [url]);
  return [data, loading, setUrl];
}
export default useFetch;
