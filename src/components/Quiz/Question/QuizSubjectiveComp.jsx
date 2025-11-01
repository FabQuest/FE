import * as S from "./styled";
import { useState, useEffect } from "react";

export const QuizSubjectiveComp = ({ question, displayNo, onAnswer }) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => setSelected(null), [question?.id]);

  if (!question) return null;
  const handleChoose = (i) => {
    setSelected(i);
    onAnswer?.(i);
  };
  return (
    <S.SubJQuestionWrapper>
      <S.QuizQBox>
        <S.QuizNum>Q{displayNo}.</S.QuizNum>
        <S.QuizQ>{question.Question}</S.QuizQ>
      </S.QuizQBox>

      <S.AnswerListBox>
        {question.choices.map((text, i) => (
          <S.AnswerBox
            key={i}
            onClick={() => handleChoose(i)}
            $active={selected === i}
          >
            {text}
          </S.AnswerBox>
        ))}
      </S.AnswerListBox>
    </S.SubJQuestionWrapper>
  );
};
