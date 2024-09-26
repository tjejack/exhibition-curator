import { useParams } from "react-router-dom";
import { getChicagoArtById } from "../utils/getChicagoArtById";
import { getClevelandArtById } from "../utils/getClevelandArtById";
import { useEffect, useState } from "react";
import { ArtObject } from "../contexts/ArtObject";

const apiGetFunctions = {
  Chicago: getChicagoArtById,
  Cleveland: getClevelandArtById,
};

export const ArtPage = () => {
  const { artwork_api, artwork_id } = useParams();
  const [artworkObject, setArtworkObject] = useState<ArtObject>();
  const [isError, setIsError] = useState<boolean>(false);
  useEffect(() => {
    if (artwork_api === undefined || artwork_id === undefined) {
      setIsError(true);
    } else if (!apiGetFunctions[artwork_api as keyof typeof apiGetFunctions]) {
      setIsError(true);
    } else {
      const apiFunction =
        apiGetFunctions[artwork_api as keyof typeof apiGetFunctions];
      apiFunction(parseInt(artwork_id)).then((artwork) => {
        if(artwork_api==="Chicago"){
          const newDescription: string = artwork.description;
          artwork.description = newDescription.replace(/<[^>]*>+/g, "");
        }
        setArtworkObject(artwork);
      });
    }
  }, [artwork_api, artwork_id]);
  return (
    <div>
      {isError ? (
        <div className="mx-auto max-w-2xl px-6 py-5 sm:px-2 sm:py-8 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            An Error Occurred.
          </h2>
          <p className="mt-6 text-base leading-7 text-gray-600">
            This may be due to access control issues with the API, incorrect
            url, or just plain old bad luck.
          </p>
        </div>
      ) : (
        <div className="mx-auto max-w-2xl px-6 py-5 sm:px-2 sm:py-8 lg:max-w-7xl lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900">
            {artworkObject?.title}
          </h2>
          <p className="text-l italic tracking-tight text-gray-900">
            by {artworkObject?.artist}
          </p>
          <div className="bg-white">
            <div className="pt-6">
              <div className="mx-auto items-center mt-3 max-w-2xl sm:px-6">
                <img
                  alt={artworkObject?.title}
                  src={artworkObject?.image}
                  className="h-full w-full object-cover object-center"
                />
              </div>
              <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:max-w-7xl lg:gap-x-8 lg:px-8">
                <div className="py-10 lg:pb-16 lg:pr-8 lg:pt-6">
                  <div>
                    <h3 className="text-2xl font-bold py-3 text-gray-900">
                      Description
                    </h3>
                    <div className="space-y-6">
                      <p className="text-base text-gray-900">
                        {artworkObject?.description}
                      </p>
                    </div>
                  </div>

                  <div className="mt-10">
                    <h3 className="text-m font-bold text-gray-900">
                      More Info
                    </h3>

                    <div className="mt-4 pb-7">
                      <ul
                        role="list"
                        className="list-disc space-y-2 pl-4 text-sm text-gray-800"
                      >
                        <li>
                          Created {artworkObject?.date}
                        </li>
                        <li>
                          Sourced from the {artworkObject?.api} Open Access API
                        </li>
                      </ul>
                    </div>
                    <a
                      className="text-blue-700 underline italic"
                      href={artworkObject?.link}
                    >
                      Find out more at the official webpage for this work
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
      <div className="mb-20 flex items-center justify-center gap-x-6">
            <a
              href="/art"
              className="rounded-md bg-green-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-green-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
            >
              Return to Art
            </a>
          </div>
    </div>
  );
};
