import styled from "styled-components";
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 5rem;
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

export const Stage = styled.div`
  position: relative;
  width: 334px;
  aspect-ratio: 334 / 485;
  border-radius: 16px;
  overflow: hidden;
  display: flex;
`;

export const Step = styled.img`
  position: absolute;
  left: ${({ $left }) => $left}%;
  top: ${({ $top }) => $top}%;
  transform: translate(-50%, -50%);
  width: 66px;
  height: 63px;

  cursor: pointer;
`;
export const ExplainBox = styled.div`
  display: flex;
  position: fixed;
  bottom: 5rem;
  padding: 1rem;
  gap: 13px;
  flex-direction: column;
  width: 334px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15);
`;

export const ExplainStepWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 6px;
  color: ${({ theme }) => theme.colors.black};
`;

export const ExplainStepName = styled.div`
  ${({ theme }) => theme.fonts.InterB1};
`;
export const ExplainStep = styled.div`
  ${({ theme }) => theme.fonts.InterR3};
`;
export const TrainBtn = styled.div`
  display: flex;
  width: 288px;
  height: 30px;
  padding: 7px 33px;
  border-radius: 8px;
  justify-content: center;
  background: var(
    --button---gradation2,
    linear-gradient(94deg, #2fceff -1.45%, #803bff 45.47%, #7073ff 85.68%)
  );

  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 2px 6px 2px rgba(0, 0, 0, 0.15);
  ${({ theme }) => theme.fonts.InterB3};
  color: ${({ theme }) => theme.colors.white};
`;
export const Character = styled.img`
  position: absolute;
  left: ${({ $left }) => $left}%;
  top: ${({ $top }) => $top}%;
  transform: translate(-50%, -87%);
  width: 112px;
  z-index: 2;
`;
