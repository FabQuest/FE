import React from "react";
import { useNavigate } from "react-router-dom";
import CommonHeader from "@components/common/Header/Header";
import CommonDescription from "@components/common/Description/Description";
import Modal from "@components/common/Modal/Modal";
import * as S from "./styled";
import { useDepositionGame } from "./hooks/useDepositionGame";
import MeasurePhase from "./components/MeasurePhase";
import AnglePhase from "./components/AnglePhase";
import GameVisuals from "./components/GameVisuals";

const Step5Page = () => {
  const navigate = useNavigate();

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
    handleModalConfirm,
  } = useDepositionGame();

  return (
    <S.PageContainer>
      <CommonHeader title="5단계: 이온 주입 & 증착" />
      <CommonDescription
        text={
          phase === "measure"
            ? "시작하기 버튼을 눌러 박막 증착을 시작하고, \n목표 범위 내에서 STOP을 눌러보세요."
            : "각도 조절 슬라이더 바를 조절하여 \n위치를 맞춘 후 fire 버튼을 눌러 \n이온을 주입해 봅시다."
        }
      />

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

      <Modal
        open={showModal}
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
        title="이온 주입 & 증착 단계 완료!"
        description="다음 단계인 금속 배선으로 넘어가시겠습니까?"
        confirmText="다음 단계"
        cancelText="나가기"
      />
    </S.PageContainer>
  );
};

export default Step5Page;
