import axios from "axios";
import { useState, useEffect } from "react";

// import { RAPID_API_KEY } from "@env";
// const rapidApiKey = RAPID_API_KEY;

const useFetch = (endpoint, query) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const rapidApiKey = process.env.RAPID_API_KEY;

  const options = {
    method: "GET",
    url: `https://jsearch.p.rapidapi.com/${endpoint}`,
    headers: {
      "X-RapidAPI-Key": "fec7fe59eemsha5ed357ecbbafa7p119a40jsn51f04cab29b7",
      "X-RapidAPI-Host": "jsearch.p.rapidapi.com",
    },
    params: {
      ...query,
    },
  };

  const fetchData = async () => {
    setIsLoading(true);

    try {
      const response = await axios.request(options);
      setData(response.data.data);
      console.log("Data is set");
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setError(error);
      alert("There is an error");
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const refetch = () => {
    setIsLoading(true);
    fetch();
  };

  return { data, isLoading, error, refetch };
};

export default useFetch;
