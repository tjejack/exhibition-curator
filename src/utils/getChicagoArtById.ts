import axios from "axios"

export const getChicagoArtById = (id: number) => {
  return axios
  .get(`https://api.artic.edu/api/v1/artworks/${id}`)
  .then(({ data }) => {
    return {
      id: data.data.id,
      title: data.data.title,
      artist: data.data.artist_title,
      image: `https://www.artic.edu/iiif/2/${data.data.image_id}/full/843,/0/default.jpg`,
      link: `https://www.artic.edu/artworks/${data.data.id}`,
      date: data.data.date_end,
      description: data.data.description,
      api: "Chicago",
    }
  })
}