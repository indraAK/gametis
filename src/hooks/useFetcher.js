export default function useFetcher(resourceURL){
  const fetcher = async (endpoint) => {
    const res = await fetch(`${resourceURL}/${endpoint}`, {
      headers: {
        "x-rapidapi-host": process.env.REACT_APP_RAPID_API_HOST,
        "x-rapidapi-key": process.env.REACT_APP_API_KEY,
      },
    });
    // If the status code is not in the range 200-299,
    // we still try to parse and throw it.
    if (!res.ok) {
      const error = new Error("An error occurred while fetching the data");
      // Attach extra info to the error object.
      error.info = await res.json();
      error.status = res.status;
      throw error;
    }

    return res.json();
  }

  return {fetcher}
}