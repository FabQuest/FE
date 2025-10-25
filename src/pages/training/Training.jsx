import * as S from "./styled";
import { useMemo } from "react";
import { Footer } from "@components/footer/Footer";
import { GaugeBar } from "@components/GaugeBar/GaugeBar";
import { STEPS } from "@constants/Step";
import { EXPLAINS } from "@constants/Step";
import { TrainingMap } from "@components/training/TrainingMap";
import { ExplainCard } from "@components/training/ExplainCard";
import Background from "@assets/images/TrainingBackground.png";
export const TrainingPage = ({ stepex = 7 }) => {
  const currentPos = useMemo(
    () => STEPS.find((s) => s.id === stepex) ?? STEPS[0],
    [stepex]
  );
  const currentExplain = useMemo(
    () => EXPLAINS.find((s) => s.step === stepex) ?? EXPLAINS[0],
    [stepex]
  );
  return (
    <S.Wrapper>
      <S.Background src={Background} />
      <S.Container>
        <S.TrainingBox>
          반도체 8대 공정 체험
          <GaugeBar step={stepex} isTraining={true} />
        </S.TrainingBox>
        <TrainingMap currentStep={stepex} currentPos={currentPos} />

        <ExplainCard
          title={currentExplain.explainName}
          text={currentExplain.explainText}
        />
      </S.Container>
      <Footer />
    </S.Wrapper>
  );
};
