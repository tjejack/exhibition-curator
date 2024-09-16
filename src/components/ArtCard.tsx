import { ChicagoArtObject } from "../contexts/ChicagoArtContext";
import { ClevelandArtObject } from "../contexts/ClevelandArtContext";

interface Props {
  chicagoArtObject?: ChicagoArtObject;
  clevelandArtObject?: ClevelandArtObject;
}

export const ArtCard = (props: Props) => {
  return (
    <div>
      {props.chicagoArtObject ? <p>props.chicagoArtObject.title</p> : null}
      {props.clevelandArtObject ? <p>props.clevelandArtObject.title</p> : null}
    </div>
  );
};
