"useClient";

import { useEffect, useRef } from "react";
import Intro from "./(sections)/Intro";
import Solution from "./(sections)/Solution";
import Contact from "./(sections)/Contact";
import Session from "./(sections)/Session";
import Speaker from "./(sections)/Speaker";

interface Props {
  curSectionIdx: number;
}

export default function Main({ curSectionIdx }: Props) {
  const divRef = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (divRef?.current?.[curSectionIdx]) {
      divRef.current[curSectionIdx]?.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  }, [curSectionIdx]);

  const pages = [
    <Intro />,
    <Speaker />,
    <Session />,
    <Solution />,
    <Contact />,
  ];

  return (
    <div>
      <div>
        {pages.map((page, idx) => (
          <div
            key={idx}
            className="min-h-svh w-4/5 mx-auto"
            ref={(element) => {
              divRef.current[idx] = element;
            }}
          >
            {page}
          </div>
        ))}
      </div>
      <div className="fixed top-0 left-0 -z-10 opacity-30">
        <img src="images/zephyr-left-bg.png" className="h-1/4" />
      </div>
      <div className="fixed top-0 right-0 -z-10 opacity-30">
        <img src="images/zephyr-right-bg.png" className="h-full" />
      </div>
    </div>
  );
}
