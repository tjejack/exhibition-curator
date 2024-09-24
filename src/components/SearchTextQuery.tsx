import { Field, Input, Label } from "@headlessui/react";
import React from "react";

interface Props {
  textQuery: string;
  setTextQuery: React.Dispatch<React.SetStateAction<string>>;
}

export const SearchTextQuery = (props: Props) => {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    props.setTextQuery(event.target.value);
  }
  return (
    <div className="w-full max-w-md px-1">
      <Field>
        <Label className="text-sm/6 font-medium text-black">Search</Label>
        <div className="relative mt-2">
          <Input
            className="block w-full rounded-md border-0 py-2 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400 sm:text-sm sm:leading-6"
            id="search-box"
            name="q"
            value={props.textQuery}
            onChange={handleChange}
          />
        </div>
      </Field>
    </div>
  );
};
