import { ChicagoArtObject } from "../contexts/ChicagoArtContext";

interface Props {
  artObject: ChicagoArtObject;
}

export const ArtCard = (props: Props) => {
  return (
    <div>
      <p>{props.artObject.title}</p>
    </div>
  );
};
