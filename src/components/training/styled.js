import styled from "styled-components";
export const Stage = styled.div`
  position: relative;
  width: 334px;
  height: 485px;
  aspect-ratio: 334 / 485;
  border-radius: 16px;
  display: flex;
  overflow-y: auto;
  overflow-x: hidden;
  scroll-behavior: smooth;
  scrollbar-width: none;
  scroll-snap-type: y mandatory;
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
`;

export const ActiveRegion = styled.img`
  position: absolute;
  left: ${({ $left }) => $left}%;
  top: ${({ $top }) => $top}%;
  transform: translate(-50%, -0%) scale(1);
  width: 60px;
  z-index: 1;

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
export const Character = styled.img`
  position: absolute;
  left: ${({ $left }) => $left}%;
  top: ${({ $top }) => $top}%;
  transform: translate(-50%, -87%);
  width: 112px;
  z-index: 2;
  scroll-snap-align: start;
  scroll-snap-stop: always;
`;
//explainCard

export const ExplainBox = styled.div`
  display: flex;
  position: fixed;
  z-index: 4;
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
