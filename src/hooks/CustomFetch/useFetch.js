import { useState, useEffect } from 'react';
import axios from 'axios';

const useFetch = (url) => {
  const [dataFetch, setDataFetch] = useState({
    loading: true,
    error: null,
    data: null,
  });
  const handleFetch = async () => {
    try {
      const resp = await axios(url);
      console.log('custom fetch: ', resp);
      setDataFetch({
        loading: false,
        error: null,
        data: resp.data,
      });
    } catch (error) {
      setDataFetch({
        loading: false,
        error,
        data: null,
      });
    }
  };
  useEffect(() => {
    handleFetch();
  }, [url]);
  return dataFetch;
};

export default useFetch;