import axios from "axios";

const fetchData = async <T>(url: string): Promise<T> => {
  try {
    const response = await axios.get<T>(url);
    return response.data;
  } catch (error) {
    console.error("An error occurred while fetching data:", error);
    throw error;
  }
};

export default fetchData;
