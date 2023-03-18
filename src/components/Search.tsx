import React, { FC, useState } from "react";
import githubLogo from "../assets/images/github-logo.png";

export enum SearchEnum {
  main = "main",
  secondary = "secondary",
}
interface ISearchProps {
  handleSearch: (value: string) => Promise<void> | void;
  type: SearchEnum;
  title?: string;
  description?: string;
  button?: string;
  feature?: string;
}

export const Search: FC<ISearchProps> = ({
  handleSearch,
  title,
  button,
  description,
  feature,
  type,
}) => {
  const [value, setValue] = useState<string>("");
  switch (type) {
    case SearchEnum.main:
      return (
        <div className="flex items-center justify-start min-w-100 h-100 py-10 bg-secondary/5">
          <form
            onSubmit={(event) => {
              event.preventDefault();
              handleSearch(value);
            }}
            className="flex flex-col w-full h-full mt-20"
          >
            <div className="flex flex-col mb-2 w-full px-5 md:px-12  h-full ">
              <div className="flex items-cetner justify-center md:jutify-between  flex-wrap-reverse w-full md:flex-nowrap mb-20">
                <div className="flex flex-col justify-around w-full">
                  <div className="text-5xl font-bold text-primary text-center md:text-start font-poppins hover:underline decoration-accent underline-offset-8 mb-8 md:mb-0">
                    {title}
                  </div>
                  <div className="text-2xl font-light text-primary/90 text-center md:text-start font-poppins">
                    {description}
                    <span className="font-bold text-accent ">{feature}</span>
                  </div>
                </div>
                <div className="flex justify-end w-auto">
                  <img
                    src={githubLogo}
                    alt="github-logo"
                    className="object-contain h-64 w-96 "
                  />
                </div>
              </div>
              <div className="flex items-center w-full ">
                <div className="relative w-full ">
                  <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                    <svg
                      aria-hidden="true"
                      className="w-5 h-5 text-secondary "
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                      ></path>
                    </svg>
                  </div>
                  <input
                    type="search"
                    id="search"
                    className="block w-full p-4 pl-10 text-lg text-primary border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:accent "
                    placeholder="Search"
                    required
                    onChange={(event) => setValue(event.target.value)}
                  />
                  <button
                    type="submit"
                    className="text-white absolute right-3 bottom-3 bg-accent hover:shadow-lg focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 "
                    onClick={() => handleSearch(value)}
                  >
                    {button}
                  </button>
                </div>
              </div>
            </div>
          </form>
        </div>
      );
      break;

    case SearchEnum.secondary:
      return (
        <form
          onSubmit={(event) => {
            event.preventDefault();
            handleSearch(value);
          }}
        >
          <div className="flex justify-end w-full px-5 md:px-12 mt-8 ">
            <div className="relative ">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-secondary "
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                  ></path>
                </svg>
              </div>
              <input
                type="search"
                id="search"
                className="block p-4 pl-10 text-sm text-primary border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:accent "
                placeholder="Search"
                required
                onChange={(event) => setValue(event.target.value)}
              />
            </div>
          </div>
        </form>
      );
      break;

    default:
      return null;
      break;
  }
};
