"use client";

import { useEffect, useState } from "react";
import Nav from "./Nav";
import Main from "./Main";

export default function Home() {
  const [curSectionIdx, setCurSectionIdx] = useState<number>(0);
  const [curMenuIdx, setCurMenuIdx] = useState<number>(0);

  const handleChangeMenu = (sectionIdx: number) => {
    setCurSectionIdx(sectionIdx);
  };

  const handleScrollChange = () => {
    setCurMenuIdx(
      Math.floor((5 * window.scrollY) / document.body.scrollHeight)
    );
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScrollChange, { capture: true });

    return window.removeEventListener("scroll", handleScrollChange);
  }, []);

  return (
    <div className="bg-transparent grid grid-cols-5">
      <div className="col-span-1">
        <Nav curMenuIdx={curMenuIdx} handleChangeMenu={handleChangeMenu} />
      </div>
      <div className="col-span-4 z-10">
        <Main curSectionIdx={curSectionIdx} />
      </div>
      <div className="fixed top-0 right-0 z-0">
        <img src="images/zephyr-right-bg.png" className="h-svh" />
      </div>
    </div>
  );
}
