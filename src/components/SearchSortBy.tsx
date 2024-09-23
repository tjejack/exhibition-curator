import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { useState } from "react";

export const SearchSortBy = () => {
  const [sortBy, setSortBy] = useState<string>("Unsorted");
  return (
    <Field>
      <Label className="text-sm/6 font-medium text-black">Sort by</Label>
      <Listbox value={sortBy} onChange={setSortBy}>
        <div className="relative mt-2">
          <ListboxButton className="block w-full rounded-md border-0 py-2 pl-3 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-sm sm:leading-6">
            <span className="flex items-center">
              <span className="ml-3 block truncate">{sortBy}</span>
            </span>
            <span className="pointer-events-none absolute inset-y-0 right-0 ml-3 flex items-center pr-2">
              <ChevronUpDownIcon
                aria-hidden="true"
                className="h-5 w-5 text-gray-400"
              />
            </span>
          </ListboxButton>
          <ListboxOptions
            transition
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm"
          >
            <ListboxOption
              key="unsorted"
              value="Unsorted"
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-emerald-200"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  Unsorted
                </span>
              </div>
            </ListboxOption>
            <ListboxOption
              key="title-a-z"
              value="Title (A-Z)"
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-emerald-200"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  Title (A-Z)
                </span>
              </div>
            </ListboxOption>
            <ListboxOption
              key="artist-a-z"
              value="Artist (A-Z)"
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-emerald-200"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  Artist (A-Z)
                </span>
              </div>
            </ListboxOption>
            <ListboxOption
              key="year"
              value="Year"
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-emerald-200"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  Year
                </span>
              </div>
            </ListboxOption>
          </ListboxOptions>
        </div>
      </Listbox>
    </Field>
  );
};
