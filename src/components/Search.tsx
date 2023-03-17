import React, { FC, useState } from "react";

interface ISearchProps {
  handleSearch: (value: string) => Promise<void> | void;
  isMain: boolean;
  title: string;
  button: string;
}

export const Search: FC<ISearchProps> = ({ handleSearch, title, button }) => {
  const [value, setValue] = useState<string>("");
  return (
    <div className="container  flex  items-center justify-center min-w-100">
      <form
        onSubmit={(event) => {
          event.preventDefault();
          handleSearch(value);
        }}
        className="flex flex-col w-full"
      >
        <div className="container w-full">
          <div className="flex flex-col mb-3 w-full">
            <div className="text-4xl font-bold dark:text-white text-center my-5 ">
              {title}
            </div>
            {/* <label>{title}</label> */}

            <div className="flex items-center justify-center w-full mx-4">
              <input
                type="text"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 "
                onChange={(event) => setValue(event.target.value)}
              />
              <button
                className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mx-2  dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
                type="submit"
              >
                {button}
              </button>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
