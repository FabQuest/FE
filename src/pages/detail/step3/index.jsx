import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import CommonHeader from "@components/common/Header/Header";
import CommonDescription from "@components/common/Description/Description";
import * as S from "./styled";
import BottomButton from "@components/common/BottomButton/BottomButton";
import Step1Component from "./components/step1";
import Step2Component from "./components/step2";
import Step3Component from "./components/step3";
import Modal from "@components/common/Modal/Modal";

const Step3Page = () => {
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