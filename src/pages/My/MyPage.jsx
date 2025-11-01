import * as S from "./styled";
import { useState } from "react";
import { Footer } from "@components/footer/Footer";
import { ProgressStep } from "@components/training/ProgressStep";
import { GradationBtn } from "@components/training/GradationBtn";
import { PrizeModal } from "@components/My/PrizeModal";
import Background from "@assets/images/MyBackground.png";
import MyIcon from "@assets/images/MyCharacter.png";
import LockedIcon from "@assets/images/LockedIcon.png";
import BeginnerIcon from "@assets/images/BeginnerIcon.png";
import ApprenticeIcon from "@assets/images/ApprenticeIcon.png";
import MasterIcon from "@assets/images/MasterIcon.png";

export const MyPage = ({ score = 7 }) => {
  const [isOpenPrize, setIsOpenPrize] = useState(false);
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
            <S.MyName>하채민</S.MyName>
            <S.MyInfoText>8대 공정 체험을 시작해보세요!</S.MyInfoText>
          </S.MyInfoBox>
          <ProgressStep
            isMypage={true}
            text={"전체 진도"}
            step={5}
            isTraining={true}
          />
          <S.BadgeContainer>
            <S.BadgeTextBox>
              <S.BadgeText>획득한 뱃지</S.BadgeText>
              <S.BadgeScore>{score}/10</S.BadgeScore>
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
              text={score < 3 ? "체험을 모두 완료하세요" : "상장 보러가기"}
              width={"173"}
              onAction={handleOpenPrize}
              isMy={true}
            />
          </S.BadgeContainer>
        </S.Container>
      )}

      <Footer />
    </S.Wrapper>
  );
};
