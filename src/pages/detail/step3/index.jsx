import React from "react";
import CommonHeader from "@components/common/Header/Header";
import CommonDescription from "@components/common/Description/Description";
import * as S from "./styled";
import BottomButton from "@components/common/BottomButton/BottomButton";
import Step1Component from "./components/step1";
import Step2Component from "./components/step2";
import Step3Component from "./components/step3";
import Modal from "@components/common/Modal/Modal";
import { usePhotoProcess } from "./hooks/usePhotoProcess";

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
    handleModalConfirm,
    descriptionText,
    subDescriptionText,
  } = usePhotoProcess();

  return (
    <S.PageContainer>
      <CommonHeader title="3단계: 포토리소그래피" />
      <CommonDescription text={descriptionText} subText={subDescriptionText} />

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

      <Modal
        open={showModal}
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
        title="포토리소그래피 단계 완료!"
        description="다음 단계인 식각공정으로 넘어가시겠습니까?"
        confirmText="다음 단계"
        cancelText="나가기"
      />
    </S.PageContainer>
  );
};

export default Step3Page;