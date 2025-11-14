import { useState, useCallback } from "react";
import { getDemoResponse } from "../../demodata/data";

const useFetch = () => {
  const [error, setError] = useState(null);
  const [pageLoading, setPageLoading] = useState(true);

  const fetchData = useCallback(
    async (url, params = undefined) => {
      setError(null);

      try {
        // Return demo data synchronously
        const data = getDemoResponse(url);
        return { status: 200, data };
      } catch (err) {
        setError(err);
        throw err;
      } finally {
        setPageLoading(false);
      }
    },
    []
  );

  return { error, fetchData };
};

export default useFetch;
