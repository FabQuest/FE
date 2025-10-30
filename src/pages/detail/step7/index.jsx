import React from "react";
import CommonHeader from "@components/common/Header/Header";
import Modal from "@components/common/Modal/Modal";
import * as S from "./styled";
import { useDieGame } from "./hooks/useDieGame";
import WaferView from "./components/WaferView";
import InspectView from "./components/InspectView";

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
    goNextStep,
  } = useDieGame();

  return (
    <S.PageContainer>
      <CommonHeader title="7단계: EDS" />

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

      <Modal
        open={nextModalOpen}
        onClose={goNextStep}
        onConfirm={goNextStep}
        title="EDS 단계 완료!"
        description="다음 단계로 넘어가시겠습니까?"
        confirmText="다음 단계"
        cancelText="나가기"
      />
    </S.PageContainer>
  );
}