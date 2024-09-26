import axios from "axios"

export const getClevelandArtById = (id: number) => {
  return axios
  .get(`https://openaccess-api.clevelandart.org/api/artworks/${id}`)
  .then(({ data }) => {
    return {
      id: data.data.id,
      title: data.data.title,
      artist: data.data.creators[0]?.description,
      image: data.data.images.web?.url,
      date: data.data.creation_date_latest,
      link: data.data.url,
      description: data.data.description,
      api: "Cleveland",
    }
  })
}