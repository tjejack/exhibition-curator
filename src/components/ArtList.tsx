import { useEffect, useState } from "react";
import { ArtCard } from "./ArtCard";
import { ArtObject } from "../contexts/ArtObject";
import { getArt } from "../utils/getArt";

interface Props {
  searchParams: URLSearchParams;
}

export const ArtList = (props: Props) => {
  const [artArray, setArtArray] = useState<ArtObject[]>([]);
  const pageNumber = props.searchParams.get("page");
  const pageLimit = props.searchParams.get("limit");
  useEffect(() => {
    getArt({page: pageNumber, limit: pageLimit}).then((artData: ArtObject[]) => {
      setArtArray(artData);
    });
  }, [pageNumber, pageLimit]);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-6 sm:px-6 sm:py-2 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Explore Art</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {artArray.map((artObject: ArtObject)=>{
      return <ArtCard key={`${artObject.api}${artObject.id}`} artObject={artObject}/>
    })}
        </div>
      </div>
    </div>
  )
};