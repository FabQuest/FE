import * as S from "./styled";
import HomeCharacter from "@assets/images/HomeCharacter.png";
import { useNavigate } from "react-router-dom";
import { LoginBtn } from "@components/btn/LoginBtn";
import { Footer } from "@components/footer/Footer";
import { GaugeBar } from "@components/GaugeBar/GaugeBar";
export const HomePage = () => {
  const navigate = useNavigate();
  const handletraingPage = () => {
    navigate("/training");
  };
  return (
    <S.BackGround>
      <S.HomeContainer>
        <S.LogoImg src={HomeCharacter} />
        <S.TextContainer>
          <S.NameText>하채민님,</S.NameText>
          <S.SubText>8대 공정 체험을 시작해보세요!</S.SubText>
        </S.TextContainer>

        <GaugeBar step={7} />

        <S.BtnContainer>
          <LoginBtn onClick={handletraingPage} text={"체험 시작하기"} />
          <LoginBtn onClick={handletraingPage} text={"퀴즈 시작하기"} />
        </S.BtnContainer>
      </S.HomeContainer>
      <Footer />
    </S.BackGround>
  );
};
