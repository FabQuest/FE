import * as S from "./styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginBtn } from "@components/btn/LoginBtn";

import NickNameLogo from "@assets/images/NickNameLogo.png";
export const LoginNickname = () => {
  const navigate = useNavigate();
  const [nickname, setNickname] = useState("");
  const handleHome = () => {
    navigate("/home");
  };
  return (
    <S.NameWrapper>
      <S.NameInputContainer>
        <S.MainText>닉네임</S.MainText>
        <S.InputWrapper>
          <S.NameInput
            placeholder="닉네임을 입력해 주세요"
            value={nickname}
            onChange={(e) => setNickname(e.target.value)}
          />
          <S.LogoImg src={NickNameLogo} />
        </S.InputWrapper>
      </S.NameInputContainer>
      <S.BtnContainer>
        <LoginBtn
          onClick={handleHome}
          text={"시작하기"}
          disabled={!nickname.trim()}
        />
      </S.BtnContainer>
    </S.NameWrapper>
  );
};
