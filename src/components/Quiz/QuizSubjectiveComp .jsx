import * as S from "./styled";
import { useState, useEffect } from "react";

export const QuizSubjectiveComp = ({ question, displayNo }) => {
  const [selected, setSelected] = useState(null);

  useEffect(() => setSelected(null), [question?.id]);

  if (!question) return null;
  const handleChoose = (i) => {
    setSelected(i);
    onAnswer?.(i); // 부모에서 기록/채점 원하면 사용
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
