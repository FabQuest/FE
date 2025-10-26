import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CommonHeader from "@components/common/Header/Header";
import CommonDescription from "@components/common/Description/Description";
import Modal from "@components/common/Modal/Modal";

import * as S from "./styled";

import ingot from "./assets/ingot.png";
import track0 from "./assets/track0.png";
import track1 from "./assets/track1.png";
import track2 from "./assets/track2.png";
import track3 from "./assets/track3.png";

const tracks = [track0, track1, track2, track3];

const LINE_POS = [0.20, 0.47, 0.74];

export const Step1Page = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [isCutting, setIsCutting] = useState(false);
  const [openComplete, setOpenComplete] = useState(false);
  const navigate = useNavigate();

  const progressImage = useMemo(
    () => tracks[Math.min(currentStep, 3)],
    [currentStep]
  );

  useEffect(() => {
    if (currentStep === 3) setOpenComplete(true);
  }, [currentStep]);

  const onClickLine = (idx) => {
    if (idx !== currentStep || isCutting) return;
    setIsCutting(true);
    const CUT_DURATION = 700;
    window.setTimeout(() => {
      setCurrentStep((s) => Math.min(s + 1, 3));
      setIsCutting(false);
    }, CUT_DURATION);
  };

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
        onCancel={() => {
          setOpenComplete(false);
          navigate(-1); 
        }}
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
