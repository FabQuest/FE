import * as S from "./styled";
import { useState, useMemo } from "react";
import { Footer } from "@components/footer/Footer";
import Background from "@assets/images/TrainingBackground.png";
import { GaugeBar } from "@components/GaugeBar/GaugeBar";
import { STEPS } from "@constants/Step";
import TrainingCharacter from "@assets/images/TrainingCharacter.png";
export const TrainingPage = () => {
  const [currentStep, setCurrentStep] = useState(3);
  const currentPos = useMemo(
    () => STEPS.find((s) => s.id === currentStep) ?? STEPS[0],
    [currentStep]
  );
  return (
    <S.Wrapper>
      <S.Background src={Background} />
      <S.Container>
        <S.TrainingBox>
          반도체 8대 공정 체험
          <GaugeBar step={3} isTraining={true} />
        </S.TrainingBox>
        <S.Stage>
          {STEPS.map((s) => (
            <S.Step
              key={s.id}
              $left={s.left}
              $top={s.top}
              src={s.id <= currentStep ? s.activeimg : s.inactiveimg}
            />
          ))}
          <S.Character
            src={TrainingCharacter}
            $left={currentPos.left}
            $top={currentPos.top}
          />
        </S.Stage>
        <S.ExplainBox>
          <S.ExplainStepWrapper>
            <S.ExplainStepName> 포토리소그래피 </S.ExplainStepName>
            <S.ExplainStep>빛을 이용한 회로 패턴 형성</S.ExplainStep>
          </S.ExplainStepWrapper>
          <S.TrainBtn>체험하기</S.TrainBtn>
        </S.ExplainBox>
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
};
