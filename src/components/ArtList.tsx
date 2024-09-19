import { useEffect, useState } from "react";
import { ArtCard } from "./ArtCard";
import { getChicagoArt } from "../utils/getChicagoArt";
import { ChicagoArtObject } from "../contexts/ChicagoArtContext";

export const ArtList = () => {
  const [chicagoArt, setChicagoArt] = useState<ChicagoArtObject[]>([]);
  useEffect(() => {
    getChicagoArt().then((chicagoData) => {
      setChicagoArt(chicagoData);
    });
  }, []);
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Explore Art</h2>
        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
        {chicagoArt.map((chicagoArtObject: ChicagoArtObject)=>{
      return <ArtCard key={chicagoArtObject.id} chicagoArtObject={chicagoArtObject}/>
    })}
        </div>
      </div>
    </div>
  )
};