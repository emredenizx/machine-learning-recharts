import axios, { AxiosResponse } from "axios";

axios.defaults.baseURL = process.env.REACT_APP_API;
axios.defaults.headers.common["Content-Type"] = "application/json";

const fetchData = async <T>(method: "get", url: string): Promise<T | null> => {
  try {
    const response: AxiosResponse = await axios({
      method,
      url,
    });

    return response.data;
  } catch (error) {
    // eslint-disable-next-line no-console
    console.log((error as Error).message);
    return null;
  }
};

export { fetchData };
