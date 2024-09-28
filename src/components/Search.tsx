import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { SearchTextQuery } from "./SearchTextQuery";
import { SearchFilterAPI } from "./SearchFilterAPI";
import { FormEvent, useState } from "react";
import { SetURLSearchParams } from "react-router-dom";

interface Props {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}

export const Search = (props: Props) => {
  const [textQuery, setTextQuery] = useState<string>("");
  const [apiFilter, setApiFilter] = useState<string>("All");

  function handleSubmit(event: FormEvent) {
    event.preventDefault();
    const newParams = new URLSearchParams();
    const pageLimit = props.searchParams.get("limit");
    if (pageLimit !== null) {
      newParams.set("limit", pageLimit);
    }
    if (textQuery.length > 0) {
      newParams.set("q", textQuery);
    }
    if (apiFilter === "Chicago" || apiFilter === "Cleveland") {
      newParams.set("api", apiFilter);
    }
    props.setSearchParams(newParams);
    window.location.reload();
  }

  function handleReset() {
    const newParams = new URLSearchParams();
    props.setSearchParams(newParams);
  }
  return (
    <form
      className="mx-auto max-w-2xl py-5 my-2 px-5 lg:max-w-7xl bg-green-200 rounded-md ring-1 ring-inset ring-emerald-400"
      onSubmit={handleSubmit}
    >
      <div className="min-w-0 flex-1">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-xl sm:tracking-tight">
          Search Art
        </h2>
        <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">
          <div className="mt-2 sm:flex">
            <SearchTextQuery
              setTextQuery={setTextQuery}
              textQuery={textQuery}
            />
            <SearchFilterAPI
              setApiFilter={setApiFilter}
              apiFilter={apiFilter}
            />
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
