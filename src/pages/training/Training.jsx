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
  const [selectedStep, setSelectedStep] = useState({ id: stepex, nonce: 0 });
  const currentPos = useMemo(
    () => STEPS.find((s) => s.id === stepex) ?? STEPS[0],
    [stepex]
  );
  const currentExplain = useMemo(
    () => EXPLAINS.find((s) => s.step === selectedStep.id) ?? EXPLAINS[0],
    [selectedStep.id, selectedStep.nonce]
  );

  const handleStepClick = (id) => {
    if (id === selectedStep.id) {
      setSelectedStep((prev) => ({ id: prev.id, nonce: prev.nonce + 1 }));
    } else {
      setSelectedStep({ id, nonce: 0 });
    }
  };
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
          onStepClick={handleStepClick}
        />

        <ExplainCard
          title={currentExplain.explainName}
          text={currentExplain.explainText}
          key={`${currentExplain.explainName}-${selectedStep.nonce}`}
        />
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
};
