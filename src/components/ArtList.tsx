import { useEffect, useState } from "react";
import { ArtCard } from "./ArtCard";
import { ArtObject } from "../contexts/ArtObject";
import { getArt } from "../utils/getArt";
import { Loading } from "./Loading";
import { Error } from "./Error";

interface Props {
  searchParams?: URLSearchParams;
}

export const ArtList = (props: Props) => {
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const [isError, setIsError] = useState<boolean>(false);
  const [tempExhibition, setTempExhibition] = useState<ArtObject[]>(
    getTempExhibition()
  );
  const [artArray, setArtArray] = useState<ArtObject[]>(tempExhibition);

  function getTempExhibition() {
    const temp: string | null = localStorage.getItem("myExhibition");
    let exhibition: ArtObject[] = [];
    if (temp !== null) {
      exhibition = JSON.parse(temp);
    }
    return exhibition;
  }
  
  let pageNumber: string | null = "";
  let pageLimit: string | null = "";
  let textQuery: string | null = "";
  let apiFilter : string | null = "";
  
  if (props.searchParams) {
    pageNumber = props.searchParams.get("page");
    pageLimit = props.searchParams.get("limit");
    textQuery = props.searchParams.get("q");
    apiFilter = props.searchParams.get("api");
  }

  useEffect(() => {
    setIsLoading(true);
    if (props.searchParams) {
      getArt({ page: pageNumber, limit: pageLimit, q: textQuery, api: apiFilter })
        .then((artData: ArtObject[]) => {
          setIsLoading(false);
          setArtArray(artData);
        })
        .catch((error) => {
          setIsLoading(false);
          setIsError(true);
          console.log(error);
        });
    } else {
      setIsLoading(false);
    }
    
  }, [pageNumber, pageLimit, textQuery, props.searchParams, apiFilter]);
  
  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />
  }
  return (
    <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 pb-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
      {artArray.map((artObject: ArtObject) => {
        return (
          <ArtCard
            key={`${artObject.api}${artObject.id}`}
            artObject={artObject}
            setTempExhibition={setTempExhibition}
            tempExhibition={tempExhibition}
          />
        );
      })}
    </div>
  );
};
