import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useNavigate } from "react-router-dom";
import { SearchTextQuery } from "./SearchTextQuery";
import { useState } from "react";

export const Search = () => {
  const [textQuery, setTextQuery] = useState<string>("");
  const navigate = useNavigate();
  function handleReset(){
    navigate('/art')
  }
  return (
    <form className="mx-auto max-w-2xl px-4 py-5 sm:px-1 sm:py-5 lg:max-w-7xl lg:px-8">
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight">
          Search Art
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 flex items-center">
            <SearchTextQuery textQuery={textQuery} setTextQuery={setTextQuery}/>
          </div>
        </div>
      </div>
      <div className="mt-5 flex ml-2">
          <button
            type="reset"
            onClick={handleReset}
            className="inline-flex items-center rounded-md bg-white px-3 py-2 text-sm font-semibold text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 hover:bg-gray-50"
          >
            Clear Search
          </button>
        <span className="ml-2 sm:ml-3">
          <button
            type="submit"
            className="inline-flex items-center rounded-md bg-green-700 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-green-300 hover:text-black focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green-600"
          >
            <MagnifyingGlassIcon
              aria-hidden="true"
              className="-ml-0.5 mr-1.5 h-5 w-5"
            />
            Search
          </button>
        </span>
      </div>
    </form>
  );
};
