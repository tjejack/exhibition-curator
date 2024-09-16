import axios from "axios";

export const getClevelandArt = () => {
  return axios.get("https://openaccess-api.clevelandart.org/api/artworks?limit=6").then(({ data }) => {
    return data.data;
  });
};
