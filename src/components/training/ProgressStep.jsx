import * as S from "./styled";
import { GaugeBar } from "@components/GaugeBar/GaugeBar";
export const ProgressStep = ({ text, step, isTraining, isMypage = false }) => {
  return (
    <S.TrainingBox $isMypage={isMypage}>
      {text}
      <GaugeBar step={step} isTraining={isTraining} />
    </S.TrainingBox>
  );
};
