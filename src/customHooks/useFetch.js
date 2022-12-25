import { axiosInstance } from "../api/axios";
import { useState, useEffect } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axiosInstance
      .get(url)
      .then((response) => {
        setData(response.data.results);
        setIsLoading(false);
        // console.log(response.data);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      });
  }, [url]);
  return { data, isLoading };
};

export default useFetch;
