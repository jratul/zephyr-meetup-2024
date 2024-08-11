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
      {pages.map((page, idx) => (
        <div
          key={idx}
          className="lg:h-svh sm:h-auto w-3/4 mx-auto"
          ref={(element) => {
            divRef.current[idx] = element;
          }}
        >
          {page}
        </div>
      ))}
    </div>
  );
}
