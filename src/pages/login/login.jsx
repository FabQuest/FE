import * as S from "./styled";
import { useState } from "react";
import LoginLogo from "@assets/images/LoginCharacter.png";
import FabQuest from "@assets/images/FabQuest.png";
import KakaoImg from "@assets/images/KakaoTalk.png";
import { LoginNickname } from "@components/login/LoginNickname";
import { LoginBtn } from "@components/btn/LoginBtn";
const API_BASE = "https://fabquest.oss-project-six.shop";
const FE_CALLBACK = "https://fabquest-fe.vercel.app/home";
export const LoginPage = () => {
  const [Login, setLogin] = useState(false);
  const kakaoLoginUrl = `${API_BASE}/oauth2/authorization/kakao?redirectUri=${encodeURIComponent(
    FE_CALLBACK
  )}`;

  return (
    <>
      <S.BackGround>
        {Login ? (
          <LoginNickname />
        ) : (
          <S.LogoWrapper>
            <S.TextWrapper>
              <S.CharacterImg src={LoginLogo} />
              <S.LogoImg src={FabQuest} />
              <S.LoginText>반도체 8대 공정 체험하기</S.LoginText>
            </S.TextWrapper>
            <S.BtnContainer href={kakaoLoginUrl}>
              <LoginBtn
                onClick={() => setLogin(true)}
                imgSrc={KakaoImg}
                text={" 카카오로 시작하기"}
              />
            </S.BtnContainer>
          </S.LogoWrapper>
        )}
      </S.BackGround>
    </>
  );
};
