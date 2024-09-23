import axios from "axios";
import { ArtObject } from "../contexts/ArtObject";
import { ChicagoArtObject } from "../contexts/ChicagoArtContext";
import { SearchQueries } from "../contexts/SearchQueries";


export const getChicagoArt = (props: SearchQueries) => {
  return axios
    .get(`https://api.artic.edu/api/v1/artworks?limit=${props.limit}&page=${props.page}`)
    .then(({ data }) => {
      const dataArray: ArtObject[] | PromiseLike<ArtObject[]> = [];
      data.data.forEach((artwork: ChicagoArtObject) =>
        dataArray.push({
          id: artwork.id,
          title: artwork.title,
          artist: artwork.artist_title,
          image: `https://www.artic.edu/iiif/2/${artwork.image_id ? artwork.image_id : "NOIMG"}/full/843,/0/default.jpg`,
          date: artwork.date_end,
          api: "Chicago",
        })
      );
      return dataArray;
    });
};
