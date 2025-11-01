import { useMemo, useState, useEffect } from "react";
import { tracks } from "../constants";

export const useWaferCut = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCutting, setIsCutting] = useState(false);
  const [openComplete, setOpenComplete] = useState(false);

  const progressImage = useMemo(
    () => tracks[Math.min(currentStep, 3)],
    [currentStep]
  );

  useEffect(() => {
    if (currentStep === 3) setOpenComplete(true);
  }, [currentStep]);

  const onClickLine = (idx) => {
    if (idx !== currentStep || isCutting) return;
    setIsCutting(true);
    const CUT_DURATION = 700;
    window.setTimeout(() => {
      setCurrentStep((s) => Math.min(s + 1, 3));
      setIsCutting(false);
    }, CUT_DURATION);
  };

  return {
    currentStep,
    isCutting,
    openComplete,
    progressImage,
    setOpenComplete,
    onClickLine,
  };
};
