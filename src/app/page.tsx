"use client";

import { useEffect, useState } from "react";
import Nav from "./Nav";

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
    <div className="grid grid-cols-5">
      <div className="col-span-1">
        <Nav curMenuIdx={curMenuIdx} handleChangeMenu={handleChangeMenu} />
      </div>
      <div className="col-span-4">
        <div></div>
      </div>
    </div>
  );
}
