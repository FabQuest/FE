import * as S from "./styled";

export const GradationBtn = ({ onAction, text, width, isMy = false }) => {
  return (
    <S.TrainBtn $width={width} onClick={onAction} $isMy={isMy}>
      {text}
    </S.TrainBtn>
  );
};
