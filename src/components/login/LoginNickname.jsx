import * as S from "./styled";
import { useState } from "react";
import NickNameLogo from "@assets/images/NickNameLogo.png";
import { LoginBtn } from "@components/btn/LoginBtn";
export const LoginNickname = () => {
  const [nickname, setNickname] = useState("");
  const handleHome = () => {
    console.log("닉네임:", nickname);
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
      <LoginBtn
        onClick={handleHome}
        text={"시작하기"}
        disabled={!nickname.trim()}
      />
    </S.NameWrapper>
  );
};
