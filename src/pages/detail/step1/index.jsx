import React from "react";
import * as S from "./styled";
import { useWaferCut } from "./hooks/useWaferCut";
import { LINE_POS } from "./constants";
import ingot from "./assets/ingot.png";
import StepLayout from "@components/layout/StepLayout/StepLayout";
import { STEP_CONTENT } from "@constants/stepContent";
import StepCompletionModal from "@components/common/Modal/StepCompletionModal";

export const Step1Page = () => {
  const {
    currentStep,
    isCutting,
    openComplete,
    progressImage,
    setOpenComplete,
    onClickLine,
  } = useWaferCut();

  const content = STEP_CONTENT[1];

  const modalProps = {
    open: openComplete,
    onClose: () => setOpenComplete(false),
    stepNumber: 1,
    modalContent: content.modal,
  };

  return (
    <StepLayout
      title={content.title}
      description={content.description}
      helpText={content.helpText}
      ModalComponent={StepCompletionModal}
      modalProps={modalProps}
    >
      <S.Stage>
        <S.IngotWrap>
          <S.Ingot src={ingot} alt="실리콘 잉곳" />
          {LINE_POS.map((y, i) => (
            <S.CutLine
              key={i}
              $topPct={y}
              $isCut={i < currentStep}
              $isActive={i === currentStep && currentStep < 3}
              onClick={() => onClickLine(i)}
              role="button"
              aria-label={`절취선 ${i + 1} 자르기`}
            />
          ))}
          {currentStep < 3 && (
            <S.Scissor
              $topPct={LINE_POS[currentStep]}
              $isCutting={isCutting}
              aria-hidden
            />
          )}
        </S.IngotWrap>
      </S.Stage>

      <S.TrackBar>
        <img src={progressImage} alt={`진행도 ${currentStep}/3`} />
      </S.TrackBar>
    </StepLayout>
  );
};

export default Step1Page;
