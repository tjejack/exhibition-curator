import axios from "axios";

export const getMetArtById = (artId: number) => {
  return axios
    .get(
      `https://collectionapi.metmuseum.org/public/collection/v1/objects/${artId}`
    )
    .then(({ data }) => {
      return data.objectIDs;
    });
};
