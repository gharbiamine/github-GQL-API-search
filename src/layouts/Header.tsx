import { FC, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import burgerMenu from "../assets/icons/burger-menu.svg";

export interface IHeaderProps {
  appName: string;
  githubLink: string;
  projectLink: string;
}

export const Header: FC<IHeaderProps> = ({
  appName,
  githubLink,
  projectLink,
}) => {
  return (
    <div className="Header">
      <div className="flex md:justify-between justify-center items-center px-5 md:px-12 py-4 bg-secondary/10">
        <div className="flex items-center gap-8">
          <div className="text-2xl font-bold text-accent text-center font-poppins">
            {appName}
          </div>
          <span className="font-light text-primary sm:block hidden">
            a lightweight explorer
          </span>
        </div>
        <div className="md:flex hidden items-center gap-8 ">
          <a
            className="flex items-center gap-2 text-primary font-poppins font-semibold bg-secondary/20 py-2 px-3 rounded-2xl cursor-pointer hover:shadow-md"
            href={projectLink}
            target="_blank"
          >
            View source
          </a>
          <a
            className="flex items-center gap-2 text-overaccent font-poppins font-semibold bg-accent py-2 px-3 rounded-2xl cursor-pointer hover:shadow-md"
            href={githubLink}
            target="_blank"
          >
            Visit github
          </a>
        </div>
      </div>
    </div>
  );
};
