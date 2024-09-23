import { Field, Input, Label } from "@headlessui/react";

export const SearchTextQuery = () => {
  return (
    <div className="w-full max-w-md px-4">
      <Field>
        <Label className="text-sm/6 font-medium text-black">Search</Label>
        <div className="relative mt-2">
          <Input className="block w-full rounded-md border-0 py-2 pl-3 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 focus:outline-none focus:ring-2 focus:ring-green-500 placeholder:text-gray-400 sm:text-sm sm:leading-6" />
        </div>
      </Field>
    </div>
  );
};
