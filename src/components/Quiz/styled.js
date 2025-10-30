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

//
export const QuizWrapper = styled.div`
  display: flex;
  width: 293px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 2rem;
`;

export const QuizQBox = styled.div`
  display: flex;
  width: 100%;
  gap: 2px;
`;
export const QuizNum = styled.div`
  ${({ theme }) => theme.fonts.RiaSansR0};
`;
export const QuizQ = styled.div`
  ${({ theme }) => theme.fonts.RiaSansR1};
`;
export const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
  padding: 0 1rem;
`;
export const AnswerBtn = styled.div`
  display: flex;
  width: 105px;
  height: 90px;
  padding: 7px 33px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  ${({ theme }) => theme.fonts.InterS0};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15);

  border: 1px solid
    ${({ $active, $type, theme }) =>
      $active
        ? $type === "O"
          ? theme.colors.blue100
          : theme.colors.red03
        : theme.colors.gray04};

  background-color: ${({ $active, $type, theme }) =>
    $active
      ? $type === "X"
        ? theme.colors.purple01
        : theme.colors.red01
      : theme.colors.white01};
`;
//subjective
export const SubJQuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 3rem;
  width: 300px;
`;
export const AnswerListBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  gap: 1rem;
`;
export const AnswerBox = styled.div`
  display: flex;
  width: 100%;
  height: 41px;
  padding: 20px;
  justify-content: flex-start;
  align-items: center;
  gap: 8px;
  border-radius: 8px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 0 4px 0 rgba(67, 56, 202, 0.25);
  border: 1px solid
    ${({ $active, theme }) =>
      $active ? theme.colors.blue100 : theme.colors.gray04};

  background-color: ${({ $active, theme }) =>
    $active ? theme.colors.purple01 : theme.colors.white};
`;
