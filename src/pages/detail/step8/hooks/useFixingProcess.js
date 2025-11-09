import { useState } from "react";
import { useNavigate } from "react-router-dom";
import useStepStore from "@stores/stepStore";

export const useFixingProcess = () => {
  const [isCylinderRotated, setIsCylinderRotated] = useState(false);
  const [wireState, setWireState] = useState("before");
  const [isClickVisible, setIsClickVisible] = useState(true);
  const [isCompletedView, setIsCompletedView] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const navigate = useNavigate();

  const setStep8CurrentSubStep = useStepStore(
    (state) => state.setStep8CurrentSubStep,
  );

  const handleCylinderClick = () => {
    if (isCylinderRotated) return;

    setIsCylinderRotated(true);
    setIsClickVisible(false);
    setTimeout(() => {
      setWireState("after");
    }, 500);

    setTimeout(() => {
      setIsCompletedView(true);
    }, 1500);

    setTimeout(() => {
      setIsModalOpen(true);
    }, 3500);
  };

  const goToHome = () => {
    setStep8CurrentSubStep(1);
    navigate("/training");
  };

  const goToQuiz = () => {
    setStep8CurrentSubStep(1);
    navigate("/quiz");
  };

  return {
    isCylinderRotated,
    wireState,
    isClickVisible,
    isCompletedView,
    isModalOpen,
    handleCylinderClick,
    goToHome,
    goToQuiz,
  };
};
