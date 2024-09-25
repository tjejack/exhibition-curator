import { ArtList } from "./ArtList";

export const ExhibitionPage = () => {
  function handleReset () {
    localStorage.removeItem("myExhibition");
    window.location.reload();
  }
  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-6 py-5 sm:px-2 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          My Exhibition
        </h2>
        <div className="inline-flex items-flex-right py-3 sm:px-2 sm:py-4 lg:max-w-7xl">
        <button
            type="reset"
            onClick={handleReset}
            className="rounded-md bg-red-300 px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-red-500 hover:bg-red-600 hover:text-white"
          >
            Remove All
          </button>
          </div>
        <ArtList />
      </div>
    </div>
  );
};
