import * as S from "./styled";
import { useState } from "react";
import { Footer } from "@components/footer/Footer";
import { ProgressStep } from "@components/training/ProgressStep";
import { GradationBtn } from "@components/training/GradationBtn";
import { PrizeModal } from "@components/My/PrizeModal";
import { useUserQuizScore } from "@hooks/My/useUserQuizScore";
import { useHomeUserInfo } from "@hooks/Home/useHomeUserInfo";
import Background from "@assets/images/MyBackground.png";
import MyIcon from "@assets/images/MyCharacter.png";
import LockedIcon from "@assets/images/LockedIcon.png";
import BeginnerIcon from "@assets/images/BeginnerIcon.png";
import ApprenticeIcon from "@assets/images/ApprenticeIcon.png";
import MasterIcon from "@assets/images/MasterIcon.png";
import Cookies from "js-cookie";

export const MyPage = () => {
  const { QuizScore } = useUserQuizScore();
  const { UserData } = useHomeUserInfo();
  console.log("마이페이지:", QuizScore);
  const score = QuizScore?.quizCorrectCount;
  const Trainingstep = UserData?.stageNumber;

  const nick = Cookies.get("nickname");
  const [isOpenPrize, setIsOpenPrize] = useState(false);
  const UserLevel =
    score < 3
      ? "8대 공정 체험을 시작해보세요!"
      : score < 6
      ? "공정 초보자"
      : score < 9
      ? "공정 견습생"
      : "공정 마스터";
  const handleOpenPrize = () => {
    setIsOpenPrize(true);
    console.log("상장 보러가기");
  };
  return (
    <S.Wrapper>
      <S.Background src={Background} />

      {isOpenPrize ? (
        <PrizeModal onClose={() => setIsOpenPrize(false)} />
      ) : (
        <S.Container>
          <S.MyInfoBox>
            <S.MyIcon src={MyIcon} />
            <S.MyName>{nick}</S.MyName>
            <S.MyInfoText>{UserLevel}</S.MyInfoText>
          </S.MyInfoBox>
          <ProgressStep
            isMypage={true}
            text={"전체 진도"}
            step={Trainingstep}
            isTraining={true}
          />
          <S.BadgeContainer>
            <S.BadgeTextBox>
              <S.BadgeText>획득한 뱃지</S.BadgeText>
              <S.BadgeScore>{Trainingstep === 8 ? score : "0"}/10</S.BadgeScore>
            </S.BadgeTextBox>
            <S.BadgeImg
              src={
                score < 3
                  ? LockedIcon
                  : score < 6
                  ? BeginnerIcon
                  : score < 9
                  ? ApprenticeIcon
                  : MasterIcon
              }
            />
            <GradationBtn
              text={
                Trainingstep < 8 ? "체험을 모두 완료하세요" : "상장 보러가기"
              }
              width={Trainingstep < 8 ? "185" : "173"}
              onAction={handleOpenPrize}
              isMy={true}
              disabled={Trainingstep < 8 ? true : false}
            />
          </S.BadgeContainer>
        </S.Container>
      )}

      <Footer />
    </S.Wrapper>
  );
};
