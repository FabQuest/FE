import * as S from "./styled";

export const LoginBtn = ({
  onClick,
  text,
  imgSrc,
  disabled = false,
  isGradation = false,
}) => {
  return (
    <S.LoginBtn
      onClick={disabled ? undefined : onClick}
      disabled={disabled}
      $isGradation={isGradation}
    >
      {imgSrc && <S.LogoImg src={imgSrc} />}
      {text}
    </S.LoginBtn>
  );
};
