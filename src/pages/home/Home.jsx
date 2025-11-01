import * as S from "./styled";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoginBtn } from "@components/btn/LoginBtn";
import { Footer } from "@components/footer/Footer";
import { GaugeBar } from "@components/GaugeBar/GaugeBar";
import { QuizModal } from "@components/home/QuizModal";
import HomeCharacter from "@assets/images/HomeCharacter.png";

export const HomePage = ({ stepex = 8 }) => {
  const [isQuizState, setIsQuizState] = useState(false);
  const isQuizAvailable = stepex > 7;
  const navigate = useNavigate();
  const handletraingPage = () => {
    navigate("/training");
  };
  const handleQuizPage = () => {
    if (!isQuizAvailable) {
      setIsQuizState(true);
    } else {
      navigate("/quiz");
    }
  };
  const closeQuizModal = () => setIsQuizState(false);

  return (
    <S.BackGround>
      <S.HomeContainer>
        <S.LogoImg src={HomeCharacter} />
        <S.TextContainer>
          <S.NameText>하채민님,</S.NameText>
          <S.SubText>8대 공정 체험을 시작해보세요!</S.SubText>
        </S.TextContainer>

        <GaugeBar step={stepex} />

        <S.BtnContainer>
          <LoginBtn
            onClick={handletraingPage}
            text={"체험 시작하기"}
            isGradation={true}
          />
          <LoginBtn onClick={handleQuizPage} text={"퀴즈 시작하기"} />
        </S.BtnContainer>
      </S.HomeContainer>
      {isQuizState && <QuizModal onClose={closeQuizModal} />}
      <Footer />
    </S.BackGround>
  );
};
