import styled from "styled-components";
export const Stage = styled.div`
  position: relative;
  width: 334px;
  height: 485px;
  aspect-ratio: 334 / 485;
  border-radius: 16px;
  overflow-y: auto;
  scrollbar-width: none;
`;
export const StageInner = styled.div`
  position: relative;
  width: 100%;
  height: 640px;
`;

export const Step = styled.img`
  position: absolute;
  left: ${({ $left }) => $left}%;
  top: ${({ $top }) => $top}%;
  transform: translate(-50%, -50%);
  width: 66px;
  height: 63px;
  cursor: pointer;
  z-index: 2;
`;

export const ActiveRegion = styled.img`
  position: absolute;
  left: ${({ $left }) => $left}%;
  top: ${({ $top }) => $top}%;
  transform: translate(-50%, -0%) scale(1);
  width: 60px;
  z-index: 1;
  pointer-events: none;
  ${({ $visible }) =>
    $visible &&
    `
      animation: ringPulse 1.4s ease-in-out infinite;
    `}

  @keyframes ringPulse {
    0% {
      transform: translate(-50%, -50%) scale(1);
    }
    50% {
      transform: translate(-50%, -50%) scale(1.2);
    }
    100% {
      transform: translate(-50%, -50%) scale(1);
    }
  }
`;
export const CharacterWrap = styled.div`
  position: absolute;
  left: ${({ $left }) => $left}%;
  top: ${({ $top }) => $top}%;
  transform: translate(-50%, -50%);
  z-index: 5;
  pointer-events: none;
`;
export const Character = styled.img`
  transform: translateY(-37%);
  width: 112px;
  pointer-events: none;
`;
//explainCard

export const ExplainBox = styled.div`
  display: flex;
  position: fixed;
  z-index: 7;
  bottom: 5rem;
  padding: 1rem;
  gap: 13px;
  flex-direction: column;
  width: 334px;
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15);

  animation: slideUp 0.5s ease-out forwards;

  @keyframes slideUp {
    from {
      opacity: 0;
      transform: translateY(30px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }
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
  width: ${({ $width }) => $width}px;
  height: 30px;
  padding: 20px 33px;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
  background: ${({ $tone }) =>
    $tone
      ? "var(--button---gradation2, linear-gradient(94deg, #2fceff -1.45%, #803bff 45.47%, #7073ff 85.68%))"
      : "#9E9E9E"};

  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 2px 6px 2px rgba(0, 0, 0, 0.15);
  ${({ theme }) => theme.fonts.InterB3};
  color: ${({ theme }) => theme.colors.white};
  border: 1px solid
    ${({ $isMy, theme }) => ($isMy ? theme.colors.mint100 : "none")};

  cursor: pointer;
`;
//progressStep
export const TrainingBox = styled.div`
  display: flex;
  position: relative;
  justify-self: flex-start;
  z-index: 1;
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
  color: ${({ theme }) => theme.colors.white};
  ${({ $isMypage, theme }) =>
    $isMypage ? theme.fonts.InterB1 : theme.fonts.RiaSansB0};
`;
