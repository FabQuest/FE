import styled from "styled-components";
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 37px;
  justify-content: center;
  align-items: center;
  z-index: 1;
`;
export const QuizBox = styled.div`
  display: flex;
  padding: 27.5px 79px 26.5px 80px;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray03};
  background: linear-gradient(
      0deg,
      rgba(124, 129, 255, 0.5) 0%,
      rgba(124, 129, 255, 0.5) 100%
    ),
    linear-gradient(
      94deg,
      rgba(0, 0, 0, 0.5) -9.03%,
      rgba(0, 55, 255, 0.5) 63.71%,
      rgba(95, 129, 255, 0.5) 85.68%
    );

  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15);
`;
export const QuizBoxText = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.RiaSansB1};
`;
export const CharacterImg = styled.img`
  display: flex;
  width: 300px;
`;
