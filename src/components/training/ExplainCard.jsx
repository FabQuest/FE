import * as S from "./styled";
import { GradationBtn } from "./GradationBtn";
export const ExplainCard = ({ title, text, onAction }) => {
  return (
    <S.ExplainBox>
      <S.ExplainStepWrapper>
        <S.ExplainStepName>{title}</S.ExplainStepName>
        <S.ExplainStep>{text}</S.ExplainStep>
      </S.ExplainStepWrapper>
      <GradationBtn onAction={onAction} text={"체험하기"} width={"288"} />
    </S.ExplainBox>
  );
};
