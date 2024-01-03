const fetcherFunction = async (url: RequestInfo | URL) => {
    const res = await fetch(url);

    if (!res.ok) {
      const msg = "Failed to fetch data";
      const status = res.status;
      const error = new Error(msg);
      throw error;
    }

    return res.json();
  };


  export default fetcherFunction;