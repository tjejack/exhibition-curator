import { SetURLSearchParams } from "react-router-dom";

interface Props {
  searchParams: URLSearchParams;
  setSearchParams: SetURLSearchParams;
}

export const PaginationUI = (props: Props) => {
  const currentPage = props.searchParams.get("page");
  function handleClick(shift: number) {
    const newParams = new URLSearchParams(props.searchParams);
    const pageNumber = currentPage ? parseInt(currentPage) : 1;
    if (!(shift === -1 && pageNumber === 1)) {
      newParams.set("page", `${shift + pageNumber}`);
      props.setSearchParams(newParams);
    }
  }
  return (
    <div className="flex items-center justify-between border-t border-gray-200 bg-white px-4 py-3 sm:px-6">
      <div className="flex flex-1 justify-between">
        <button
          className="relative inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={() => handleClick(-1)}
        >
          Previous
        </button>
        <button
          className="relative ml-3 inline-flex items-center rounded-md border border-gray-300 bg-white px-4 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
          onClick={() => handleClick(+1)}
        >
          Next
        </button>
      </div>
    </div>
  );
};
