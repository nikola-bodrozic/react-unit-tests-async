import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Fetch() {
  const [data, setData] = useState(null);
  useEffect(() => {
    let mounted = true;

    const loadData = async () => {
      if (mounted) {
        try {
          let result = await axios.get("/data.json");
          setData(result.data);
        } catch (error) {
          console.error(error);
        }
      }
    };
    loadData();

    return () => {
      mounted = false;
    };
  }, []);

  if (!data) {
    return <div data-testid="loading">Loading data...</div>;
  }

  return <div data-testid="resolved">{data.greeting}</div>;
}
