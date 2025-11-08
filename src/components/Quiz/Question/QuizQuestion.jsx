import * as S from "./styled";
import { useState, useMemo, useCallback } from "react";
import { QuizComp } from "./QuizComp";
import { GradationBtn } from "@components/training/GradationBtn";
import { CombinedQuestions } from "@constants/Quiz";
import { QuizSubjectiveComp } from "./QuizSubjectiveComp";
import BackIcon from "@assets/icon/backbutton.png";

export const QuizQuestion = ({ setResults, onSubmit, setIsBackState }) => {
  const items = useMemo(() => CombinedQuestions, []);
  const [idx, setIdx] = useState(0);
  const current = items[idx];
  const displayNo = idx + 1;

  const handleAnswer = useCallback(
    (selectedFromChild) => {
      const q = current;
      if (!q) return;

      let correct;
      let isCorrect = false;

      if (q.type === "OX") {
        correct = q.correct;
        isCorrect = selectedFromChild === correct;
      } else if (q.type === "SUBJ") {
        correct = q.correctIndex;
        isCorrect = selectedFromChild === correct;
      }

      setResults((prev) => ({
        ...prev,
        [q.seq]: {
          type: q.type,
          selected: selectedFromChild,
          correct,
          isCorrect,
          explanation: q.explanation || "",
          displayNo,
        },
      }));
    },
    [current, displayNo]
  );

  const goNext = () => {
    if (idx < items.length - 1) setIdx((v) => v + 1);
    else onSubmit();
  };
  const handleChangeBackState = () => {
    setIsBackState(true);
  };
  return (
    <S.Container>
      <S.TitleBox>
        퀴즈 풀기
        <S.BackIcon src={BackIcon} onClick={handleChangeBackState} />
      </S.TitleBox>
      {current?.type === "OX" ? (
        <QuizComp
          question={current}
          displayNo={displayNo}
          onAnswer={handleAnswer}
        />
      ) : (
        <QuizSubjectiveComp
          question={current}
          displayNo={displayNo}
          onAnswer={handleAnswer}
        />
      )}

      <GradationBtn
        text={idx === items.length - 1 ? "제출하기" : "다음"}
        width={"173"}
        isMy={true}
        onAction={goNext}
      />
    </S.Container>
  );
};
