import axios from "axios";

const ACCESS_KEY = "KehqIdu4BxKzhpIUevUcN9SvBU2EWS8z7mFaUOdiUaU";
const REQUEST_URL = "https://api.unsplash.com/search/photos";

const searchImages = async (term) => {
  const response = await axios.get(REQUEST_URL, {
    headers: { Authorization: "Client-ID " + ACCESS_KEY },
    params: { query: term },
  });

  return response.data.results;
};

export default searchImages;
