import * as S from "./styled";

export const ExplainCard = ({ title, text, onAction }) => {
  return (
    <S.ExplainBox>
      <S.ExplainStepWrapper>
        <S.ExplainStepName>{title}</S.ExplainStepName>
        <S.ExplainStep>{text}</S.ExplainStep>
      </S.ExplainStepWrapper>
      <S.TrainBtn onClick={onAction}>체험하기</S.TrainBtn>
    </S.ExplainBox>
  );
};
