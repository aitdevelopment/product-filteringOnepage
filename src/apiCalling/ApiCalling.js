import axios from "axios";

const getData = async (url) => {
  const headers = {
    "Content-Type": "application/json",
  };
  try {
    const response = await axios.get(url, { headers: headers });
    return response;
  } catch (error) {
    return error;
  }
};

export default getData;
