import * as S from "./styled";
import { useEffect, useRef } from "react";
import { STEPS } from "@constants/Step";
import { StepItem } from "./StepItem";
import TrainingCharacter from "@assets/images/TrainingCharacter.png";

export const TrainingMap = ({ currentStep, currentPos, onStepClick }) => {
  const wrapRef = useRef < HTMLDivElement > null;
  useEffect(() => {
    requestAnimationFrame(() => {
      wrapRef.current?.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  }, [currentPos.left, currentPos.top]);

  return (
    <S.Stage>
      <S.StageInner>
        {STEPS.map((s) => (
          <StepItem
            key={s.id}
            left={s.left}
            top={s.top}
            active={s.id === currentStep}
            completed={s.id <= currentStep ? s.activeimg : s.inactiveimg}
            onClick={() => onStepClick(s.id)}
          />
        ))}
        <S.CharacterWrap
          ref={wrapRef}
          $left={currentPos.left}
          $top={currentPos.top}
        >
          <S.Character src={TrainingCharacter} />
        </S.CharacterWrap>
      </S.StageInner>
    </S.Stage>
  );
};
