import * as S from "./styled";
import { useState, useEffect } from "react";
export const QuizComp = ({ question, displayNo }) => {
  const [answer, setAnswer] = useState(null);
  if (!question) return null;
  useEffect(() => {
    setAnswer(null);
  }, [question?.id]);

  const handleClick = (choice) => {
    setAnswer(choice);
  };
  return (
    <S.QuizWrapper>
      <S.QuizQBox>
        <S.QuizNum>Q{displayNo}.</S.QuizNum>
        <S.QuizQ>{question.Question}</S.QuizQ>
      </S.QuizQBox>
      <S.AnswerWrapper>
        <S.AnswerBtn
          $active={answer === "O"}
          $type="O"
          onClick={() => handleClick("O")}
        >
          O
        </S.AnswerBtn>
        <S.AnswerBtn
          $active={answer === "X"}
          $type="X"
          onClick={() => handleClick("X")}
        >
          X
        </S.AnswerBtn>
      </S.AnswerWrapper>
    </S.QuizWrapper>
  );
};
