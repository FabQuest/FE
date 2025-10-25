import styled from "styled-components";
export const GaugeBarContainer = styled.div`
  display: flex;
  width: 254px;
  flex-direction: column;
  gap: 0.5rem;
`;

export const GaugeTrophy = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  gap: 5px;
`;

export const TrophyImg = styled.img`
  display: flex;
`;
export const TrophyText = styled.div`
  ${({ theme }) => theme.fonts.InterM2};
  color: ${({ theme }) => theme.colors.white};
`;

export const Step = styled.div`
  display: flex;
  margin-left: auto;
  ${({ theme }) => theme.fonts.InterM2};
  color: ${({ theme }) => theme.colors.gray03};
  .span {
    color: ${({ theme }) => theme.colors.white};

    ${({ theme }) => theme.fonts.InterM3};
  }
`;
export const GaugeBar = styled.div`
  width: 100%;
  height: 16px;
  background: #888;
  border-radius: 8px;
`;

export const GaugeFill = styled.div`
  width: ${({ $step }) => ($step / 8) * 100}%;
  height: 100%;
  border-radius: inherit;
  background: linear-gradient(94deg, #0037ff 25%, #acbeff 65%, #ffffff 100%);
  mix-blend-mode: lighten;
  transition: width 0.4s ease;
`;
