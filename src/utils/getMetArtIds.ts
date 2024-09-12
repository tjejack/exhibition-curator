import axios from "axios";

export const getMetArtIds = () => {
    return axios.get('https://collectionapi.metmuseum.org/public/collection/v1/objects').then(({data}) => {
        return data;
    })
};