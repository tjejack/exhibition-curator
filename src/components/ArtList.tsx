import { useEffect, useState } from "react";
import { ArtCard } from "./ArtCard";
import { getMetArtIds } from "../utils/getMetArtIds";


export const ArtList = () => {
  const [metArtIDsArray, setMetArtIDsArray] = useState<number[]>([]);
  useEffect(() => {
    getMetArtIds().then((metArtIdData: number[]) => {
      setMetArtIDsArray(metArtIdData);
    });
  }, []);
  return (
    <div>
      <p>This is the art list.</p>
      <ArtCard />
    </div>
  );
};
