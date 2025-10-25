import * as S from "./styled";
import { STEPS } from "@constants/Step";
import { StepItem } from "./StepItem";
import TrainingCharacter from "@assets/images/TrainingCharacter.png";

export const TrainingMap = ({ currentStep, currentPos }) => {
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
          />
        ))}
        <S.Character
          src={TrainingCharacter}
          $left={currentPos.left}
          $top={currentPos.top}
        />
      </S.StageInner>
    </S.Stage>
  );
};
