import { ArtObject } from "../contexts/ArtObject";
import { SearchQueries } from "../contexts/SearchQueries";
import { getChicagoArt } from "./getChicagoArt";
import { getClevelandArt } from "./getClevelandArt";

interface Props {
  page: string | null;
  limit: string | null;
  q: string | null;
  api: string | null;
}

export async function getArt(props: Props) {
  const searchQueries: SearchQueries = { page: "1", limit: "10" };
  if (props.page !== null && !isNaN(parseInt(props.page))) {
    searchQueries.page = props.page;
  }
  if (props.limit !== null && !isNaN(parseInt(props.limit))) {
    if(props.api !== "Chicago" && props.api !== "Chicago"){
      searchQueries.limit = `${Math.ceil(parseInt(props.limit) / 2)}`;
    } else {
      searchQueries.limit = props.limit;
    }
  }
  if (props.q !== null) {
    searchQueries.q = props.q;
  }
  try {
    const artArray: ArtObject[] = [];
    if (props.api === "Cleveland") {
      searchQueries.API = "cleveland";
      const clevelandArt = await getClevelandArt(searchQueries);
      artArray.push(...clevelandArt);
    } else if (props.api === "Chicago") {
      searchQueries.API = "chicago";
      const chicagoArt = await getChicagoArt(searchQueries);
      artArray.push(...chicagoArt);
    } else {
      const chicagoArt = await getChicagoArt(searchQueries);
      const clevelandArt = await getClevelandArt(searchQueries);
      artArray.push(...clevelandArt, ...chicagoArt);
    }
    return artArray;
  } catch {
    return [];
  }
}
