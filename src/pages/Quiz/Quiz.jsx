import * as S from "./styled";
import { useState } from "react";
import { GradationBtn } from "@components/training/GradationBtn";
import { QuizQuestion } from "@components/Quiz/Question/QuizQuestion";
import { QuizResult } from "@components/Quiz/Result/QuizResult";
import { BackModal } from "@components/Quiz/BackModal/BackModal";
import Background from "@assets/images/MyBackground.png";
import Character from "@assets/images/QuizCharacter.png";

export const QuizPage = () => {
  const [openQuizComp, setOpenQuizComp] = useState(false);
  const [isResult, setIsResult] = useState(false);
  const [results, setResults] = useState({});
  const [isBackState, setIsBackState] = useState(false);

  const startQuiz = () => {
    setResults({});
    setIsResult(false);
    setOpenQuizComp(true);
  };

  const handleSubmit = () => {
    setIsResult(true);
  };
  const closeBackModal = () => setIsBackState(false);
  return (
    <>
      {isResult ? (
        <QuizResult
          results={results}
          onRetry={() => {
            setIsResult(false);
            setOpenQuizComp(false);
          }}
        />
      ) : (
        <>
          {openQuizComp ? (
            <>
              <QuizQuestion
                setIsBackState={setIsBackState}
                results={results}
                setResults={setResults}
                onSubmit={handleSubmit}
              />
              {isBackState && (
                <BackModal
                  setIsBackState={setIsBackState}
                  onClose={closeBackModal}
                />
              )}
            </>
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
                  onAction={startQuiz}
                />
              </S.Container>
            </S.Wrapper>
          )}
        </>
      )}
    </>
  );
};
