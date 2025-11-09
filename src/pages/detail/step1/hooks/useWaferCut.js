import { useMemo, useState, useEffect } from "react";
import { tracks } from "../constants";
import useStepStore from "@stores/stepStore"; // Import the store

export const useWaferCut = () => {
  // Use Zustand for currentStep and openComplete
  const { step1, setStep1CurrentStep, setStep1OpenComplete } = useStepStore();

  const currentStep = step1.currentStep;
  const openComplete = step1.openComplete;

  const [isCutting, setIsCutting] = useState(false); // isCutting remains local

  const progressImage = useMemo(
    () => tracks[Math.min(currentStep, 3)],
    [currentStep],
  );

  useEffect(() => {
    if (currentStep === 3) setStep1OpenComplete(true);
  }, [currentStep, setStep1OpenComplete]); // Add setStep1OpenComplete to dependencies

  const onClickLine = (idx) => {
    if (idx !== currentStep || isCutting) return;
    setIsCutting(true);
    const CUT_DURATION = 700;
    window.setTimeout(() => {
      setStep1CurrentStep(Math.min(currentStep + 1, 3)); // Update via Zustand action
      setIsCutting(false);
    }, CUT_DURATION);
  };

  const handleCloseModal = () => {
    setStep1OpenComplete(false);
    setStep1CurrentStep(0);
  };

  return {
    currentStep,
    isCutting,
    openComplete,
    progressImage,
    handleCloseModal, // Return the new handler
    onClickLine,
  };
};
