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
  const [isNoArt, setIsNoArt] = useState<boolean>(false);
  const [isNoExhibition, setIsNoExhibition] = useState<boolean>(false);
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
  let apiFilter: string | null = "";

  if (props.searchParams) {
    pageNumber = props.searchParams.get("page");
    pageLimit = props.searchParams.get("limit");
    textQuery = props.searchParams.get("q");
    apiFilter = props.searchParams.get("api");
  }

  useEffect(() => {
    setIsError(false);
    setIsNoArt(false);
    setIsLoading(true);
    if (props.searchParams) {
      getArt({
        page: pageNumber,
        limit: pageLimit,
        q: textQuery,
        api: apiFilter,
      })
        .then((artData: ArtObject[]) => {
          setIsLoading(false);
          if (artData.length === 0) {
            setIsNoArt(true);
          } else {
            setArtArray(artData);
          }
        })
        .catch((error) => {
          setIsLoading(false);
          setIsError(true);
          console.log(error);
        });
    } else {
      setIsLoading(false);
      if(artArray.length === 0){
        setIsNoExhibition(true);
      }
    }
  }, [pageNumber, pageLimit, textQuery, props.searchParams, apiFilter, artArray.length]);

  if (isLoading) {
    return <Loading />;
  }
  if (isError) {
    return <Error />;
  }
  if (isNoArt) {
    return (
      <div className="py-3 text-center text-xl">
        <p>We appear to be drawing a blank.</p>
        <p>Perhaps your search term was too specific?</p>
      </div>
    );
  }
  if (isNoExhibition) {
    return (
      <div className="text-center text-xl">
        <div className="pb-5">
        <p>It seems your exhibition is empty!</p>
        <p>Why not check out the Explore Art page and add some works?</p>
        </div>
        <a
          href="/art"
          className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
        >
          Explore Art
        </a>
      </div>
    );
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
