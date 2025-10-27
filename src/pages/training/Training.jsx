import * as S from "./styled";
import { useState, useMemo } from "react";
import { Footer } from "@components/footer/Footer";
import { STEPS } from "@constants/Step";
import { EXPLAINS } from "@constants/Step";
import { TrainingMap } from "@components/training/TrainingMap";
import { ExplainCard } from "@components/training/ExplainCard";
import { ProgressStep } from "@components/training/ProgressStep";
import Background from "@assets/images/TrainingBackground.png";
export const TrainingPage = ({ stepex = 8 }) => {
  const [selectedStep, setSelectedStep] = useState(stepex);
  const currentPos = useMemo(
    () => STEPS.find((s) => s.id === stepex) ?? STEPS[0],
    [stepex]
  );
  const currentExplain = useMemo(
    () => EXPLAINS.find((s) => s.step === selectedStep) ?? EXPLAINS[0],
    [selectedStep]
  );
  return (
    <S.Wrapper>
      <S.Background src={Background} />
      <S.Container>
        <ProgressStep
          text={" 반도체 8대 공정 체험"}
          step={stepex}
          isTraining={true}
        />

        <TrainingMap
          currentStep={stepex}
          currentPos={currentPos}
          onStepClick={setSelectedStep}
        />

        <ExplainCard
          title={currentExplain.explainName}
          text={currentExplain.explainText}
          key={currentExplain.explainName}
        />
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
};
