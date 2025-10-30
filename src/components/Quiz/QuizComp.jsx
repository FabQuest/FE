import * as S from "./styled";

export const QuizComp = () => {
  return (
    <S.QuizWrapper>
      <S.QuizQ>
        Q1 : 웨이퍼 제조 단계에서는 실리콘 잉곳을 절단하고 연마하여 평탄한
        기판을 만든다.
      </S.QuizQ>
      <S.AnswerWrapper>
        <S.AnswerBtn>O</S.AnswerBtn>
        <S.AnswerBtn>X</S.AnswerBtn>
      </S.AnswerWrapper>
    </S.QuizWrapper>
  );
};
