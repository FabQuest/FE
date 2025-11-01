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

  const handleModalConfirm = () => {
    setShowModal(false);
    navigate("/detail/step4");
  };

  const descriptionText = currentSubStep === 1
    ? "원하는 마스크를 선택해 주세요."
    : currentSubStep === 2
    ? "손전등을 클릭하여 웨이퍼에 \n마스크 모양대로 문양을 남겨봅시다."
    : "빛을 맞은 부분이 약해졌어요. \n현상액을 부어 그 부분만 씻어내고 \n패턴을 남겨봅시다.";

  const subDescriptionText = currentSubStep === 2
    ? "* 마스크는 빛을 차단하는 방어막 역할을 합니다. \n마스크 모양대로 원하는 곳에 빛을 노출시킬 수 있어요."
    : "";

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
    handleModalConfirm,
    descriptionText,
    subDescriptionText,
  };
};
