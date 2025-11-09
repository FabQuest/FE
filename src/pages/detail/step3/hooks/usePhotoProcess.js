// usePhotoProcess.ts
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStepStore from "@stores/stepStore";

export const usePhotoProcess = () => {
  const navigate = useNavigate();

  const currentSubStep = useStepStore((state) => state.step3.currentSubStep);
  const setStep3CurrentSubStep = useStepStore(
    (state) => state.setStep3CurrentSubStep,
  );
  const selectedMask = useStepStore((state) => state.step3.selectedMask);
  const setStep3SelectedMask = useStepStore(
    (state) => state.setStep3SelectedMask,
  );

  const [allLightsOnInStep2, setAllLightsOnInStep2] = useState(false);
  const [isStep3Completed, setIsStep3Completed] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleNext = () => {
    if (currentSubStep === 1) {
      setStep3CurrentSubStep(2);
    } else if (currentSubStep === 2) {
      setStep3CurrentSubStep(3);
    } else if (currentSubStep === 3) {
      setShowModal(true);
    } else {
      navigate("/detail/step4");
    }
  };

  const handleLightsStatusChange = (status) => {
    setAllLightsOnInStep2(status);
  };

  const handleStep3Complete = () => {
    setIsStep3Completed(true);
  };

  const handleModalClose = () => {
    setShowModal(false);
    setStep3CurrentSubStep(1);
    setStep3SelectedMask(null);
  };

  return {
    selected: selectedMask,
    setSelected: setStep3SelectedMask,
    currentSubStep,
    allLightsOnInStep2,
    isStep3Completed,
    showModal,
    handleNext,
    handleLightsStatusChange,
    handleStep3Complete,
    handleModalClose,
  };
};
