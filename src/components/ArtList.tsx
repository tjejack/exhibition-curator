import { useEffect, useState } from "react";
import { ArtCard } from "./ArtCard";
import { getChicagoArt } from "../utils/getChicagoArt";
import { ChicagoArtObject } from "../contexts/ChicagoArtContext";
import { getClevelandArt } from "../utils/getClevelandArt";
import { ClevelandArtObject } from "../contexts/ClevelandArtContext";

export const ArtList = () => {
  const [chicagoArt, setChicagoArt] = useState<ChicagoArtObject[]>([]);
  const [clevelandArt, setClevelandArt] = useState<ClevelandArtObject[]>([]);
  useEffect(() => {
    getChicagoArt().then((chicagoData) => {
      setChicagoArt(chicagoData);
    });
    getClevelandArt().then((clevelandData)=>{
      setClevelandArt(clevelandData)
    })
  }, []);
  return (
    <div>
      {chicagoArt.map((chicagoArtObject: ChicagoArtObject)=>{
        return <ArtCard key={chicagoArtObject.id} chicagoArtObject={chicagoArtObject}/>
      })}
      {clevelandArt.map((clevelandArtObject: ClevelandArtObject)=>{
        return <ArtCard key={clevelandArtObject.id} clevelandArtObject={clevelandArtObject}/>
      })}
    </div>
  );
};
