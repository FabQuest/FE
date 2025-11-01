import React from "react";
import { useNavigate } from "react-router-dom";
import CommonHeader from "@components/common/Header/Header";
import CommonDescription from "@components/common/Description/Description";
import Modal from "@components/common/Modal/Modal";
import * as S from "./styled";
import { useWaferCut } from "./hooks/useWaferCut";
import { LINE_POS } from "./constants";
import ingot from "./assets/ingot.png";

export const Step1Page = () => {
  const navigate = useNavigate();
  const {
    currentStep,
    isCutting,
    openComplete,
    progressImage,
    setOpenComplete,
    onClickLine,
  } = useWaferCut();

  return (
    <S.PageContainer>
      <CommonHeader title="1단계: 웨이퍼 제조" />
      <CommonDescription text={"절취선을 터치하여 \n실리콘 잉곳을 웨이퍼로 만들어보세요."} />

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

      <Modal
        open={openComplete}
        onClose={() => setOpenComplete(false)}
        title="웨이퍼 제조 단계 완료!"
        description="다음 단계인 산화공정으로 넘어가시겠습니까?"
        cancelText="나가기"
        confirmText="다음 단계"
        onConfirm={() => {
          setOpenComplete(false);
          navigate("/detail/step2");
        }}
        disableBackdropClose
        hideCancel={false}
      />
    </S.PageContainer>
  );
};

export default Step1Page;
