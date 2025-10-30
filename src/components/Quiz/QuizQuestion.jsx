import * as S from "./styled";
import { useState, useMemo } from "react";
import { QuizComp } from "./QuizComp";
import { GradationBtn } from "@components/training/GradationBtn";
import { CombinedQuestions } from "@constants/Quiz";
import { QuizSubjectiveComp } from "./QuizSubjectiveComp ";
import BackIcon from "@assets/icon/backbutton.png";
export const QuizQuestion = () => {
  const items = useMemo(() => CombinedQuestions, []);
  const [idx, setIdx] = useState(0);
  const current = items[idx];
  const displayNo = idx + 1;

  const goNext = () => {
    if (idx < items.length - 1) setIdx(idx + 1);
  };
  return (
    <S.Container>
      <S.TitleBox>
        퀴즈 풀기
        <S.BackIcon src={BackIcon} />
      </S.TitleBox>
      {current?.type === "OX" ? (
        <QuizComp question={current} displayNo={displayNo} />
      ) : (
        <QuizSubjectiveComp question={current} displayNo={displayNo} />
      )}

      <GradationBtn
        text={idx === items.length - 1 ? "완료" : "다음"}
        width={"173"}
        isMy={true}
        onAction={goNext}
      />
    </S.Container>
  );
};
