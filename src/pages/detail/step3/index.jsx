import React from "react";
import * as S from "./styled";
import BottomButton from "@components/common/BottomButton/BottomButton";
import Step1Component from "./components/step1";
import Step2Component from "./components/step2";
import Step3Component from "./components/step3";
import { usePhotoProcess } from "./hooks/usePhotoProcess";
import StepLayout from "@components/layout/StepLayout/StepLayout";
import { STEP_CONTENT } from "@constants/stepContent";
import StepCompletionModal from "@components/common/Modal/StepCompletionModal";

const Step3Page = () => {
  const {
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
  } = usePhotoProcess();

  const content = STEP_CONTENT[3];

  const modalProps = {
    open: showModal,
    onClose: handleModalClose,
    stepNumber: 3,
    modalContent: content.modal,
  };

  return (
    <StepLayout
      title={content.title}
      description={content.description(currentSubStep)}
      subDescription={content.subDescription(currentSubStep)}
      helpText={content.helpText(currentSubStep)}
      ModalComponent={StepCompletionModal}
      modalProps={modalProps}
    >
      {currentSubStep === 1 && (
        <Step1Component selected={selected} setSelected={setSelected} />
      )}
      {currentSubStep === 2 && (
        <Step2Component selectedMask={selected} onLightsAllOn={handleLightsStatusChange} />
      )}
      {currentSubStep === 3 && (
        <Step3Component onComplete={handleStep3Complete} />
      )}

      <BottomButton
        visible={currentSubStep === 1 ? !!selected : (currentSubStep === 2 ? allLightsOnInStep2 : isStep3Completed)}
        disabled={currentSubStep === 1 ? !selected : (currentSubStep === 2 ? !allLightsOnInStep2 : !isStep3Completed)}
        onClick={handleNext}
        text={currentSubStep === 1 ? "다음" : (currentSubStep === 2 ? "다음" : "완료")}
      />
    </StepLayout>
  );
};

export default Step3Page;