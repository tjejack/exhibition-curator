import { HeartIcon as OutlineHeart } from "@heroicons/react/24/outline";
import { HeartIcon as SolidHeart } from "@heroicons/react/24/solid";
import { ArtObject } from "../contexts/ArtObject";
import { useEffect, useState } from "react";

interface Props {
  artObject: ArtObject;
  setTempExhibition: React.Dispatch<React.SetStateAction<ArtObject[]>>;
  tempExhibition: ArtObject[];
}

export const ArtCard = (props: Props) => {
  const [isFave, setIsFave] = useState<boolean>(false);
  function changeExhibitionStatus(isAdd: boolean) {
    setIsFave(isAdd);
    if (isAdd) {
      props.setTempExhibition((prev) => [...prev, props.artObject]);
    } else {
      props.setTempExhibition((prev) =>
        prev.filter(
          (artwork) =>
            !(
              artwork.id === props.artObject.id &&
              artwork.api === props.artObject.api
            )
        )
      );
    }
  }
  useEffect(() => {
    if (
      props.tempExhibition.some(
        (artwork) =>
          artwork.id === props.artObject.id &&
          artwork.api === props.artObject.api
      )
    ) {
      setIsFave(true);
    } else {
      setIsFave(false);
    }
  }, [isFave, props.artObject.api, props.artObject.id, props.tempExhibition]);
  return (
    <div key={props.artObject.id} className="group relative">
      <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
        <a href={`/art/${props.artObject.api}/${props.artObject.id}`}>
          <img
            alt={props.artObject.title}
            src={props.artObject.image}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </a>
      </div>
      {/* <div className="aspect-h-1 aspect-w-1 w-full h-full overflow-hidden rounded-md bg-gray-200 inline-flex items-center justify-center lg:aspect-none group-hover:opacity-75 lg:h-80">
          <p>Image Unavailable</p>
        </div> */}
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">{props.artObject.title}</h3>
          <p className="mt-1 text-sm text-gray-500">{props.artObject.artist}</p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          {props.artObject.date}
        </p>
      </div>
      {isFave ? (
        <button
          className="mt-4 flex justify-between"
          onClick={() => {
            changeExhibitionStatus(false);
          }}
        >
          <SolidHeart className="mr-1.5 mt-1 h-5 w-5 text-red-700" />{" "}
          <p className="text-sm text-gray-800">Remove from Exhibition</p>
        </button>
      ) : (
        <button
          className="mt-4 flex justify-between"
          onClick={() => {
            changeExhibitionStatus(true);
          }}
        >
          <OutlineHeart className="mr-1.5 mt-1 h-5 w-5" />{" "}
          <p className="text-sm text-gray-800">Add to Exhibition</p>
        </button>
      )}
    </div>
  );
};
