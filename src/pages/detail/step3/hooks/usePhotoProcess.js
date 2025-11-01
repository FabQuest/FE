import { useState } from "react";
import { useNavigate } from "react-router-dom";

export const usePhotoProcess = () => {
  const navigate = useNavigate();
  const [selected, setSelected] = useState(null);
  const [currentSubStep, setCurrentSubStep] = useState(1);
  const [allLightsOnInStep2, setAllLightsOnInStep2] = useState(false);
  const [isStep3Completed, setIsStep3Completed] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const handleNext = () => {
    if (currentSubStep === 1) {
      setCurrentSubStep(2);
    } else if (currentSubStep === 2) {
      setCurrentSubStep(3);
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
  };

  return {
    selected,
    setSelected,
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
