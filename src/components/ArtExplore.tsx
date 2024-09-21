import { ArtList } from "./ArtList";
import { Search } from "./Search";
import { PaginationUI } from "./PaginationUI";
import { useSearchParams } from "react-router-dom";

export const ArtExplore = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  return (
    <div>
      <Search />
      <ArtList />
      <PaginationUI searchParams={searchParams} setSearchParams={setSearchParams}/>
    </div>
  );
};
