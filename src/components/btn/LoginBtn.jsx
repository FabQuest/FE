import * as S from "./styled";

export const LoginBtn = ({ onClick, text, imgSrc, disabled = false }) => {
  return (
    <S.LoginBtn onClick={disabled ? undefined : onClick} disabled={disabled}>
      {imgSrc && <S.LogoImg src={imgSrc} />}
      {text}
    </S.LoginBtn>
  );
};
