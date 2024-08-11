"use client";

import { useEffect, useState } from "react";
import Nav from "./Nav";
import Main from "./Main";
import { menus } from "./constants";

export default function Home() {
  const [curSectionIdx, setCurSectionIdx] = useState<number>(0);
  const [curMenuIdx, setCurMenuIdx] = useState<number>(0);

  const handleChangeMenu = (sectionIdx: number) => {
    setCurSectionIdx(sectionIdx);
  };

  const handleScrollChange = () => {
    let idx = Math.floor(
      (5 * (window.scrollY + 100)) / document.body.scrollHeight
    );
    setCurMenuIdx(idx);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollChange, { capture: true });

    return window.removeEventListener("scroll", handleScrollChange);
  }, []);

  return (
    <div className="bg-transparent grid lg:grid-cols-5 md:grid-cols-12">
      <div className="lg:col-span-1 md:col-span-1">
        <Nav curMenuIdx={curMenuIdx} handleChangeMenu={handleChangeMenu} />
      </div>
      <div className="lg:col-span-4 md:col-span-11">
        <Main curSectionIdx={curSectionIdx} />
      </div>
    </div>
  );
}
