import * as S from "./styled";

export const GradationBtn = ({
  onAction,
  text,
  width,
  isMy = false,
  disabled = false,
  tone = true,
}) => {
  return (
    <S.TrainBtn
      $width={width}
      onClick={disabled ? undefined : onAction}
      $isMy={isMy}
      disabled={disabled}
      $tone={tone}
    >
      {text}
    </S.TrainBtn>
  );
};
