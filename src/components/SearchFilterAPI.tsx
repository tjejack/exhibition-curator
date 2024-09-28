import {
  Field,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import { ChevronUpDownIcon, InformationCircleIcon } from "@heroicons/react/20/solid";
import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";
import { useState } from "react";

interface Props {
  apiFilter: string;
  setApiFilter: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchFilterAPI = (props: Props) => {
  const [isShowInfo, setIsShowInfo] = useState<boolean>(false);
  function handleClick(){
    setIsShowInfo(true);
  }

  return (
    <div>
      <Dialog
        open={isShowInfo}
        onClose={() => {
          setIsShowInfo(false);
        }}
        className="relative z-10"
      >
        <DialogBackdrop
          transition
          className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in"
        />

        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
            <DialogPanel
              transition
              className="relative transform overflow-hidden rounded-lg bg-white text-left shadow-xl transition-all data-[closed]:translate-y-4 data-[closed]:opacity-0 data-[enter]:duration-300 data-[leave]:duration-200 data-[enter]:ease-out data-[leave]:ease-in sm:my-8 sm:w-full sm:max-w-lg data-[closed]:sm:translate-y-0 data-[closed]:sm:scale-95"
            >
              <div className="bg-white px-4 pb-4 pt-5 sm:p-6 sm:pb-4">
                <div className="sm:flex sm:items-start">
                  <div className="mx-auto flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-green-100 sm:mx-0 sm:h-10 sm:w-10">
                    <InformationCircleIcon
                      aria-hidden="true"
                      className="h-6 w-6 text-green-600"
                    />
                  </div>
                  <div className="mt-3 text-center sm:ml-4 sm:mt-0 sm:text-left">
                    <DialogTitle
                      as="h3"
                      className="text-base font-semibold leading-6 text-gray-900"
                    >
                      About APIs
                    </DialogTitle>
                    <div className="mt-2">
                      <p className="text-sm text-gray-500">
                        APIs are essentially interfaces by which software can share data.
                        This website sources its data from APIs associated with <a href="https://www.artic.edu/" className="text-blue-700 underline italic">the Art Institute of Chicago</a> ('Chicago') and <a href="https://www.clevelandart.org/" className="text-blue-700 underline italic">the Cleveland Museum of Art</a> ('Cleveland').
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    <Field className="px-1">
      <Label className="text-sm/6 font-medium text-black">Source</Label>
      <button type="button">
        <InformationCircleIcon
          className="inline text-green-600 h-5 px-2"
          onClick={handleClick}
        />
      </button>
      <Listbox value={props.apiFilter} onChange={props.setApiFilter}>
        <div className="relative mt-2">
          <ListboxButton className="block w-full rounded-md border-0 py-2 pl-3 pr-20 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 sm:text-sm sm:leading-6 bg-white">
            <span className="flex items-center">
              <span className="ml-3 block truncate">{props.apiFilter}</span>
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
            className="absolute z-10 mt-1 max-h-56 w-full overflow-auto rounded-md bg-white py-1 text-base shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none data-[closed]:data-[leave]:opacity-0 data-[leave]:transition data-[leave]:duration-100 data-[leave]:ease-in sm:text-sm bg-white"
          >
            <ListboxOption
              key="all"
              value="All"
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-emerald-200"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  All
                </span>
              </div>
            </ListboxOption>
            <ListboxOption
              key="chicago"
              value="Chicago"
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-emerald-200"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  Chicago
                </span>
              </div>
            </ListboxOption>
            <ListboxOption
              key="cleveland"
              value="Cleveland"
              className="group relative cursor-default select-none py-2 pl-3 pr-9 text-gray-900 data-[focus]:bg-emerald-200"
            >
              <div className="flex items-center">
                <span className="ml-3 block truncate font-normal group-data-[selected]:font-semibold">
                  Cleveland
                </span>
              </div>
            </ListboxOption>
          </ListboxOptions>
        </div>
      </Listbox>
    </Field>
    </div>
  );
};
