import * as S from "./styled";
import { useState } from "react";
import LoginLogo from "@assets/images/LoginLogo.png";
import FabQuest from "@assets/images/FabQuest.png";
import KakaoImg from "@assets/images/KakaoTalk.png";
import { LoginNickname } from "@components/login/LoginNickname";
import { LoginBtn } from "@components/btn/LoginBtn";
const API_BASE = "https://fabquest.oss-project-six.shop";
const FE_CALLBACK = "https://fabquest-fe.vercel.app/auth/callback";
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
              <S.LogoImg src={LoginLogo} />
              <S.LogoImg src={FabQuest} />
              <S.LoginText>반도체 8대 공정 체험하기</S.LoginText>
            </S.TextWrapper>
            <S.BtnContainer>
              <a href={kakaoLoginUrl}>
                <LoginBtn
                  onClick={() => setLogin(true)}
                  imgSrc={KakaoImg}
                  text={" 카카오로 시작하기"}
                />
              </a>
            </S.BtnContainer>
          </S.LogoWrapper>
        )}
      </S.BackGround>
    </>
  );
};
