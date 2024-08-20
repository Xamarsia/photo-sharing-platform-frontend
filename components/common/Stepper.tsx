"use client";

import { ReactNode, useEffect, useState } from "react";

type Props = {
  steps: ReactNode[],
  currentIndex: number,
}


export default function Stepper({ steps, currentIndex }: Props) {
  const [index, setIndex] = useState<number>(0);

  useEffect(() => {
    if (currentIndex >= steps.length) {
      setIndex(steps.length - 1)
    } else if (currentIndex < 0) {
      setIndex(0)
    } else {
      setIndex(currentIndex)
    }
  }, [currentIndex])


  return (
    <div>
      {steps[index]}
    </div>
  );
}