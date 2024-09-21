import { ArtObject } from "../contexts/ArtObject";

interface Props {
  artObject: ArtObject;
}

export const ArtCard = (props: Props) => {

  return (
    <div key={props.artObject.id} className="group relative">
      {props.artObject.image_id ? (
        <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-80">
          <img
            alt={props.artObject.title}
            src={`https://www.artic.edu/iiif/2/${props.artObject.image_id}/full/843,/0/default.jpg`}
            className="h-full w-full object-cover object-center lg:h-full lg:w-full"
          />
        </div>
      ) : (
        <div className="aspect-h-1 aspect-w-1 w-full h-full overflow-hidden rounded-md bg-gray-200 inline-flex items-center justify-center lg:aspect-none group-hover:opacity-75 lg:h-80">
          <p>Image Unavailable</p>
        </div>
      )}
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-sm text-gray-700">
            <a href={`/art/${props.artObject.id}`}>
              <span aria-hidden="true" className="absolute inset-0" />
              {props.artObject.title}
            </a>
          </h3>
          <p className="mt-1 text-sm text-gray-500">
            {props.artObject.artist}
          </p>
        </div>
        <p className="text-sm font-medium text-gray-900">
          {props.artObject.date}
        </p>
      </div>
    </div>
  );
};
