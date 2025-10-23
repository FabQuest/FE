import * as S from "./styled";
import HomeCharacter from "@assets/images/HomeCharacter.png";
import trophy from "@assets/images/trophy.png";
import { LoginBtn } from "@components/btn/LoginBtn";
import { Footer } from "@components/footer/Footer";
export const HomePage = () => {
  const handleQuizPage = () => {
    console.log("페이지 이동");
  };
  return (
    <S.BackGround>
      <S.HomeContainer>
        <S.LogoImg src={HomeCharacter} />
        <S.TextContainer>
          <S.NameText>하채민님,</S.NameText>
          <S.SubText>8대 공정 체험을 시작해보세요!</S.SubText>
        </S.TextContainer>

        <S.GaugeBarContainer>
          <S.GaugeTrophy>
            <S.TrophyImg src={trophy} />
            <S.TrophyText>성취율</S.TrophyText>
          </S.GaugeTrophy>
          <S.GaugeBar>
            <S.GaugeFill $step={6} />
          </S.GaugeBar>
        </S.GaugeBarContainer>

        <S.BtnContainer>
          <LoginBtn onClick={handleQuizPage} text={"체험 시작하기"} />
          <LoginBtn onClick={handleQuizPage} text={"퀴즈 시작하기"} />
        </S.BtnContainer>
      </S.HomeContainer>
      <Footer />
    </S.BackGround>
  );
};
