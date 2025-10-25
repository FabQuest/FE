import * as S from "./styled";
import ActiveRing from "@assets/images/CurrentStepIcon.png";

export const StepItem = ({ left, top, active, completed }) => (
  <>
    <S.Step $left={left} $top={top} src={completed} />
    {active && (
      <S.ActiveRegion src={ActiveRing} $left={left} $top={top} $visible />
    )}
  </>
);
