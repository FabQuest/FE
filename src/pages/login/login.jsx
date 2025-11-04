import * as S from "./styled";
import { useState } from "react";
import LoginLogo from "@assets/images/LoginLogo.png";
import FabQuest from "@assets/images/FabQuest.png";
import KakaoImg from "@assets/images/KakaoTalk.png";
import { LoginNickname } from "@components/login/LoginNickname";
import { LoginBtn } from "@components/btn/LoginBtn";
export const LoginPage = () => {
  const [Login, setLogin] = useState(false);
  //fix
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
