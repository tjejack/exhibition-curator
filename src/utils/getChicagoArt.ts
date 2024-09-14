import axios from "axios";

export const getChicagoArt = () => {
  return axios.get("https://api.artic.edu/api/v1/artworks").then(({ data }) => {
    return data.data;
  });
};
