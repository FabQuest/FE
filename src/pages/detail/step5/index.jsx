import React from "react";
import * as S from "./styled";
import { useDepositionGame } from "./hooks/useDepositionGame";
import MeasurePhase from "./components/MeasurePhase";
import AnglePhase from "./components/AnglePhase";
import GameVisuals from "./components/GameVisuals";
import StepLayout from "@components/layout/StepLayout/StepLayout";
import { STEP_CONTENT } from "@constants/stepContent";
import StepCompletionModal from "@components/common/Modal/StepCompletionModal";

const Step5Page = () => {
  const {
    phase,
    isRunning,
    pos,
    failed,
    success,
    pellicleExiting,
    pellicleGone,
    arrowsEnter,
    arrowsExit,
    showModal,
    pellicleRef,
    slotW,
    slotH,
    angle,
    sliderValue,
    handleStart,
    handleStop,
    handleAngleChange,
    fire,
    handleModalClose,
  } = useDepositionGame();

  const content = STEP_CONTENT[5];

  const modalProps = {
    open: showModal,
    onClose: handleModalClose,
    stepNumber: 5,
    modalContent: content.modal,
  };

  return (
    <StepLayout
      title={content.title}
      description={content.description(phase)}
      helpText={content.helpText}
      ModalComponent={StepCompletionModal}
      modalProps={modalProps}
    >
      <GameVisuals
        pellicleGone={pellicleGone}
        pellicleExiting={pellicleExiting}
        arrowsEnter={arrowsEnter}
        arrowsExit={arrowsExit}
        angle={angle}
        success={success}
        pellicleRef={pellicleRef}
        slotW={slotW}
        slotH={slotH}
      />

      {phase === "measure" ? (
        <MeasurePhase
          isRunning={isRunning}
          failed={failed}
          pos={pos}
          handleStart={handleStart}
          handleStop={handleStop}
        />
      ) : (
        <AnglePhase
          angle={angle}
          sliderValue={sliderValue}
          handleAngleChange={handleAngleChange}
          fire={fire}
        />
      )}
    </StepLayout>
  );
};

export default Step5Page;
