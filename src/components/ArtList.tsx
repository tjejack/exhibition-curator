import { useEffect, useState } from "react";
import { ArtCard } from "./ArtCard";
import { getChicagoArt } from "../utils/getChicagoArt";
import { ChicagoArtObject } from "../contexts/ChicagoArtContext";

export const ArtList = () => {
  const [chicagoArt, setChicagoArt] = useState<ChicagoArtObject[]>([]);
  useEffect(() => {
    getChicagoArt().then((data) => {
      setChicagoArt(data);
    });
  }, []);
  return (
    <div>
      {chicagoArt.map((artObject: ChicagoArtObject)=>{
        return <ArtCard key={artObject.id} artObject={artObject}/>
      })}
    </div>
  );
};
