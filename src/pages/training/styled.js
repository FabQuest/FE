import styled from "styled-components";
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding-top: 2rem;
  justify-content: center;
  align-items: flex-start;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 3rem;
  @media (max-height: 680px) {
    gap: 5px;
  }
`;
export const Background = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;
export const TrainingBox = styled.div`
  display: flex;
  position: relative;
  justify-self: flex-start;
  z-index: 1;
  margin-top: 3rem;
  flex-direction: column;
  width: 334px;
  justify-content: center;
  align-items: center;
  gap: 20px;
  padding: 22px 0 31px 0;
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
    ),
    #0b0e2a;
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15);
  ${({ theme }) => theme.fonts.RiaSansB0};
  color: ${({ theme }) => theme.colors.white};
`;
