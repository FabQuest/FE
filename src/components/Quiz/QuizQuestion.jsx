import * as S from "./styled";
import { QuizComp } from "./QuizComp";
import { GradationBtn } from "@components/training/GradationBtn";
import BackIcon from "@assets/icon/backbutton.png";
export const QuizQuestion = () => {
  return (
    <S.Container>
      <S.TitleBox>
        퀴즈 풀기
        <S.BackIcon src={BackIcon} />
      </S.TitleBox>
      <QuizComp />
      <GradationBtn text={"다음"} width={"173"} isMy={true} />
    </S.Container>
  );
};
