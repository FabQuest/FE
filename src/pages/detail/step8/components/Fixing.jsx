import React from "react";
import * as S from "../styled";
import { useFixingProcess } from "../hooks/useFixingProcess";

import cylinder from "../assets/cylinder.png";
import click from "../assets/click.png";
import wire_before from "../assets/wire_before.png";
import wire_after from "../assets/wire_after.png";
import semiconductor from "../assets/semiconductor.png";
import FinalModal from "./finalModal";

export default function Fixing() {
  const {
    isCylinderRotated,
    wireState,
    isClickVisible,
    isCompletedView,
    isModalOpen,
    handleCylinderClick,
    goToHome,
    goToQuiz,
  } = useFixingProcess();

  const currentWire = wireState === 'before' ? wire_before : wire_after;

  return (
    <S.Step3Container>
      <S.InteractiveWrap $isCompleted={isCompletedView}>
        <S.ClickableContainer onClick={handleCylinderClick}>
          <S.CylinderImage
            src={cylinder}
            alt="Cylinder"
            $isRotated={isCylinderRotated}
          />
          {isClickVisible && <S.ClickImage src={click} alt="Click here" />}
        </S.ClickableContainer>
        <S.WireImage src={currentWire} alt="Wire" />
      </S.InteractiveWrap>

      <S.CompletedWrap $isCompleted={isCompletedView}>
        <S.CompleteCard>
          <S.CompleteTitle>패키징 완료 🎉</S.CompleteTitle>
          <S.CompleteDesc>
            완성된 반도체 IC 패키지가 만들어졌습니다!
            <br />
            이제 이 칩은 전자제품에 장착되어 사용될 수 있습니다.
          </S.CompleteDesc>
        </S.CompleteCard>

        <S.SemiconductorWrap>
          <S.SemiconductorImg
            src={semiconductor}
            alt="SEMICONDUCTOR IC-2024"
          />
        </S.SemiconductorWrap>
      </S.CompletedWrap>

      <FinalModal
        open={isModalOpen}
        onClose={goToHome}
        onConfirm={goToQuiz}
        confirmText="퀴즈 풀기"
        cancelText="홈으로 가기"
      />
    </S.Step3Container>
  );
}
