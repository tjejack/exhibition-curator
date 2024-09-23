import axios from "axios";
import { ArtObject } from "../contexts/ArtObject";
import { ClevelandArtObject } from "../contexts/ClevelandArtContext";
import { SearchQueries } from "../contexts/SearchQueries";

export const getClevelandArt = (props: SearchQueries) => {
  const skip = parseInt(props.page)*parseInt(props.limit);
  return axios.get(`https://openaccess-api.clevelandart.org/api/artworks?has_image=1&limit=${props.limit}&skip=${skip}`).then(({ data }) => {
    const dataArray: ArtObject[] | PromiseLike<ArtObject[]> = [];
      data.data.forEach((artwork: ClevelandArtObject) =>
        dataArray.push({
          id: artwork.id,
          title: artwork.title,
          artist: artwork.creators[0]?.description,
          image: artwork.images.web?.url,
          date: artwork.creation_date_latest,
          api: "Cleveland",
        })
      );
      return dataArray;
  });
};
