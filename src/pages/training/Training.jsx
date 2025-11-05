import * as S from "./styled";
import { useState, useMemo } from "react";
import { Footer } from "@components/footer/Footer";
import { STEPS } from "@constants/Step";
import { EXPLAINS } from "@constants/Step";
import { TrainingMap } from "@components/training/TrainingMap";
import { ExplainCard } from "@components/training/ExplainCard";
import { ProgressStep } from "@components/training/ProgressStep";
import { useHomeUserInfo } from "@hooks/Home/useHomeUserInfo";
import Background from "@assets/images/TrainingBackground.png";
export const TrainingPage = () => {
  const { UserData } = useHomeUserInfo();
  const Trainingstep = UserData?.stageNumber;

  const [selectedStep, setSelectedStep] = useState({
    id: Trainingstep,
    nonce: 0,
  });
  const currentPos = useMemo(
    () => STEPS.find((s) => s.id === Trainingstep) ?? STEPS[0],
    [Trainingstep]
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
          step={Trainingstep}
          isTraining={true}
        />

        <TrainingMap
          currentStep={Trainingstep}
          currentPos={currentPos}
          onStepClick={handleStepClick}
        />

        <ExplainCard
          stepex={Trainingstep}
          stepId={currentExplain.step}
          title={currentExplain.explainName}
          text={currentExplain.explainText}
          key={`${currentExplain.explainName}-${selectedStep.nonce}`}
        />
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
};
