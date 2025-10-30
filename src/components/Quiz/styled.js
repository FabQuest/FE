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

export const QuizQ = styled.div`
  display: flex;
  width: 100%;
  ${({ theme }) => theme.fonts.RiaSansR0};
`;
export const AnswerWrapper = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  justify-content: space-between;
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
  border: 1px solid ${({ theme }) => theme.colors.gray04};
  background-color: ${({ theme }) => theme.colors.white01};
  ${({ theme }) => theme.fonts.InterS0};

  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15);
`;
