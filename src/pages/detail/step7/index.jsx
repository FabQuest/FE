import React from "react";
import Modal from "@components/common/Modal/Modal";
import * as S from "./styled";
import { useDieGame } from "./hooks/useDieGame";
import WaferView from "./components/WaferView";
import InspectView from "./components/InspectView";
import StepLayout from "@components/layout/StepLayout/StepLayout";
import { STEP_CONTENT } from "@constants/stepContent";
import StepCompletionModal from "@components/common/Modal/StepCompletionModal";

export default function Step7Page() {
  const {
    view,
    dies,
    selectedDie,
    checkModalOpen,
    checkModalType,
    showSummary,
    nextModalOpen,
    yieldData,
    onClickDie,
    onChoose,
    handleCheckModalConfirm,
    handleModalClose,
  } = useDieGame();

  const content = STEP_CONTENT[7];

  const completionModalProps = {
    open: nextModalOpen,
    onClose: handleModalClose,
    stepNumber: 7,
    modalContent: content.modal,
  };

  return (
    <StepLayout
      title={content.title}
      description={content.description(view)}
      helpText={content.helpText}
      ModalComponent={StepCompletionModal}
      modalProps={completionModalProps}
    >
      {view === "wafer" ? (
        <WaferView
          dies={dies}
          onClickDie={onClickDie}
          showSummary={showSummary}
          yieldData={yieldData}
        />
      ) : (
        selectedDie && <InspectView selectedDie={selectedDie} onChoose={onChoose} />
      )}

      <Modal
        open={checkModalOpen}
        onClose={handleCheckModalConfirm}
        onConfirm={handleCheckModalConfirm}
        title={checkModalType === "correct" ? "정답입니다 🎉" : "오답입니다 😭"}
        description={checkModalType === "correct" ? "나머지 다이도 확인해 보세요." : "다시 시도해보세요."}
        confirmText={checkModalType === "correct" ? "나머지 확인하기" : "다시 시도하기"}
        hideCancel={true}
      />
    </StepLayout>
  );
}