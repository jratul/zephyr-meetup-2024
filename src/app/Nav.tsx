"use client";

import clsx from "clsx";
import { menus } from "./constants";

interface Props {
  curMenuIdx: number;
  handleChangeMenu: (menuIdx: number) => void;
}

export default function Nav({ curMenuIdx, handleChangeMenu }: Props) {
  return (
    <div className="bg-transparent h-svh w-1/5 m-5 fixed">
      <nav>
        <ol role="list" className="text-white lg:text-6xl sm:text-xl">
          {menus.map((menu, menuIdx) => (
            <li
              className={clsx(
                "hover:text-yellow-300 cursor-pointer my-2",
                menuIdx === curMenuIdx && "text-yellow-500"
              )}
              onClick={() => handleChangeMenu(menuIdx)}
              key={menu}
            >
              {menu}
            </li>
          ))}
        </ol>
      </nav>
    </div>
  );
}
