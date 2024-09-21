import axios from "axios";
import { ArtObject } from "../contexts/ArtObject";
import { ChicagoArtObject } from "../contexts/ChicagoArtContext";


export const getChicagoArt = () => {
  return axios.get(`https://api.artic.edu/api/v1/artworks?limit=10`).then(({ data }) => {
    const dataArray: ArtObject[] | PromiseLike<ArtObject[]> = [];
    data.data.forEach((artwork: ChicagoArtObject) => dataArray.push({
      id: artwork.id,
      title: artwork.title,
      artist: artwork.artist_title,
      image_id: artwork.image_id,
      date: artwork.date_end,
      api: 'Chicago',
  }))
    return dataArray;
  });
};
