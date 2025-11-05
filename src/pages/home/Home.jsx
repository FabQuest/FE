import * as S from "./styled";
import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

import { LoginBtn } from "@components/btn/LoginBtn";
import { Footer } from "@components/footer/Footer";
import { GaugeBar } from "@components/GaugeBar/GaugeBar";
import { QuizModal } from "@components/home/QuizModal";
import { useHomeUserInfo } from "@hooks/Home/useHomeUserInfo";
import HomeCharacter from "@assets/images/HomeCharacter.png";

export const HomePage = () => {
  const { search, hash, pathname } = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const params = new URLSearchParams(search);
    let token = params.get("accessToken");
    let nickname = params.get("nickname");
    if ((!token || !nickname) && hash) {
      const h = new URLSearchParams(hash.replace(/^#/, ""));
      token = h.get("accessToken");
      nickname = h.get("nickname");
    }
    if (token) {
      Cookies.set("access_token", token, {
        path: "/",
        secure: true,
        sameSite: "None",
      });
    }
    if (nickname) {
      Cookies.set("nickname", nickname, {
        path: "/",
        secure: true,
        sameSite: "None",
      });
    }
    if (token || nickname) {
      window.history.replaceState(null, "", pathname + (hash || ""));
    }
  }, [search, hash, pathname]);

  const { UserData } = useHomeUserInfo();
  console.log(UserData);
  const step = UserData?.stageNumber ?? 8;
  const [isQuizState, setIsQuizState] = useState(false);
  const isQuizAvailable = step > 7;

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
  const nick = Cookies.get("nickname");
  return (
    <S.BackGround>
      <S.HomeContainer>
        <S.LogoImg src={HomeCharacter} />
        <S.TextContainer>
          <S.NameText>{nick}님,</S.NameText>
          <S.SubText>8대 공정 체험을 시작해보세요!</S.SubText>
        </S.TextContainer>

        <GaugeBar step={step} />

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
