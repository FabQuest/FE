import styled from "styled-components";
export const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.colors.white};
  padding-bottom: 1rem;
`;

export const TitleBox = styled.div`
  display: flex;
  position: relative;
  width: 100%;
  align-items: center;
  justify-content: center;
  height: 54px;
  padding: 8px 20px;
  ${({ theme }) => theme.fonts.InterM1};
`;

export const BackIcon = styled.img`
  display: flex;
  position: absolute;
  width: 7px;
  left: 1rem;
`;
export const StateResultWrapper = styled.div`
  display: flex;
  width: 295px;
  padding: 16px 16px 0 16px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 12px;
`;
export const LevelBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: ${({ theme }) => theme.colors.purple600};
`;
export const CongratulationText = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.InterM2};
`;
export const UserLevel = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.InterB1};
  span {
    color: ${({ theme }) => theme.colors.blue100};
  }
`;
export const QuizResultImg = styled.img`
  display: flex;
  width: 87px;
`;

export const QuizScore = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.InterM3};

  span {
    ${({ theme }) => theme.fonts.InterM2};
  }
`;

export const ResultWrapper = styled.div`
  display: flex;
  width: 335px;
  margin-top: 1rem;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  overflow-y: auto;

  gap: 5px;
`;
export const AnswerBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  min-height: 120px;
  box-sizing: border-box;
  padding: 20px;
  justify-content: center;
  align-items: start;
  border-radius: 8px;
  box-shadow: 0 0 4px 0 rgba(67, 56, 202, 0.25);
  border: 1px solid
    ${({ $isCorrect, theme }) =>
      $isCorrect ? theme.colors.blue100 : theme.colors.red03};

  background-color: ${({ $isCorrect, theme }) =>
    $isCorrect ? theme.colors.purple01 : theme.colors.red01};
`;

export const AnswerQText = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.InterM3};
`;
export const AnswerText = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.InterR1};
  color: ${({ $isCorrect, theme }) =>
    $isCorrect ? theme.colors.blue100 : theme.colors.red03};
`;
export const AnswerExplanation = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.InterR2};
  color: ${({ $isCorrect, theme }) =>
    $isCorrect ? theme.colors.blue100 : theme.colors.red03};
`;
export const BtnWrapper = styled.div`
  display: flex;
  padding-top: 1rem;
`;
