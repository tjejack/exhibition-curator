import { ArtObject } from "../contexts/ArtObject";
import { SearchQueries } from "../contexts/SearchQueries";
import { getChicagoArt } from "./getChicagoArt";
import { getClevelandArt } from "./getClevelandArt";

interface Props {
  page: string | null;
  limit: string | null;
}

export async function getArt(props: Props) {
  const searchQueries: SearchQueries = { page: "1", limit: "10" };
  if (props.page !== null && !isNaN(parseInt(props.page))) {
    searchQueries.page = props.page;
  }
  if (props.limit !== null && !isNaN(parseInt(props.limit))) {
    searchQueries.limit = `${parseInt(props.limit) / 2}`;
  }
  const chicagoArt = await getChicagoArt(searchQueries);
  const clevelandArt = await getClevelandArt(searchQueries);
  const artArray: ArtObject[] = [...chicagoArt, ...clevelandArt];
  return artArray;
}
