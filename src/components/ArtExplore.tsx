import { ArtList } from "./ArtList";
import { Search } from "./Search";
import { PaginationUI } from "./PaginationUI";
import { useSearchParams } from "react-router-dom";

export const ArtExplore = () => {
  const [searchParams, setSearchParams] = useSearchParams();

  return (
    <div className="bg-white">
      <div className="mx-auto max-w-2xl px-6 py-5 sm:px-2 sm:py-8 lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">
          Explore Art
        </h2>
        <Search searchParams={searchParams} setSearchParams={setSearchParams} />
        <ArtList searchParams={searchParams} />
        <PaginationUI
          searchParams={searchParams}
          setSearchParams={setSearchParams}
        />
      </div>
    </div>
  );
};
