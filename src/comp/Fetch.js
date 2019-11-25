import React, { useState, useEffect } from "react";
import axios from "axios";

const useAxios = (url, setData) => {
  useEffect(
    () => {
      let mounted = true;

      const loadData = async () => {
        const result = await axios.get(url);
        if (mounted) {
          console.log(result.data)
          setData(result.data);
        }
      };
      loadData();

      return () => {
        mounted = false;
      };
    },
    [url]
  );
};

export default function Fetch({ url }) {
  const [data, setData] = useState(null);
  useAxios("/data.json", setData);

  if (!data) {
    return <div data-testid="loading">Loading data...</div>;
  }

  return <div data-testid="resolved">{data.greeting}</div>;
}