import * as S from "./styled";
import trophy from "@assets/images/trophy.png";

export const GaugeBar = ({ step, isTraining = false }) => {
  return (
    <S.GaugeBarContainer>
      <S.GaugeTrophy>
        <S.TrophyImg src={trophy} />
        <S.TrophyText>성취율</S.TrophyText>
        {isTraining ? (
          <S.Step>
            <span>{step}</span>/8
          </S.Step>
        ) : (
          <></>
        )}
      </S.GaugeTrophy>
      <S.GaugeBar>
        <S.GaugeFill $step={step} />
      </S.GaugeBar>
    </S.GaugeBarContainer>
  );
};
