import * as S from "./styled";
import { useState } from "react";
import Background from "@assets/images/MyBackground.png";
import Character from "@assets/images/QuizCharacter.png";
import { GradationBtn } from "@components/training/GradationBtn";
import { QuizQuestion } from "@components/Quiz/QuizQuestion";
export const QuizPage = () => {
  const [openQuizComp, setOpenQuizComp] = useState(false);
  const OpenQuizComponent = () => {
    setOpenQuizComp(true);
  };
  return (
    <>
      {openQuizComp ? (
        <QuizQuestion />
      ) : (
        <S.Wrapper>
          <S.Background src={Background} />
          <S.Container>
            <S.QuizBox>
              <S.QuizBoxText>반도체 전문가가 </S.QuizBoxText>
              <S.QuizBoxText>되기위한 퀴즈 ! </S.QuizBoxText>
            </S.QuizBox>
            <S.CharacterImg src={Character} />
            <GradationBtn
              text={"퀴즈 풀기"}
              width={"173"}
              isMy={true}
              onAction={OpenQuizComponent}
            />
          </S.Container>
        </S.Wrapper>
      )}
    </>
  );
};
