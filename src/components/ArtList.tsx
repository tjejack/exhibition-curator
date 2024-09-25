import { useEffect, useState } from "react";
import { ArtCard } from "./ArtCard";
import { ArtObject } from "../contexts/ArtObject";
import { getArt } from "../utils/getArt";

interface Props {
  searchParams?: URLSearchParams;
}

export const ArtList = (props: Props) => {
  const [artArray, setArtArray] = useState<ArtObject[]>([]);
  const [tempExhibition, setTempExhibition] = useState<ArtObject[]>(
    getTempExhibition()
  );

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
  if (props.searchParams) {
    pageNumber = props.searchParams.get("page");
    pageLimit = props.searchParams.get("limit");
    textQuery = props.searchParams.get("q");
  }
  useEffect(() => {
    if (props.searchParams) {
      getArt({ page: pageNumber, limit: pageLimit, q: textQuery }).then(
        (artData: ArtObject[]) => {
          setArtArray(artData);
        }
      );
    } else {
      setArtArray(tempExhibition);
    }
    const myExhibition: string = JSON.stringify(tempExhibition);
    localStorage.setItem("myExhibition", myExhibition);
  }, [pageNumber, pageLimit, textQuery, props.searchParams, tempExhibition]);
  return (
    // <div className="bg-white">
    //   <div className="mx-auto max-w-2xl px-6 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
    //     <h2 className="text-2xl font-bold tracking-tight text-gray-900">
    //       Explore Art
    //     </h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
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
    //   </div>
    // </div>
  );
};
