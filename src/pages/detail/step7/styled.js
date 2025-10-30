import styled, { keyframes } from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

export const WaferArea = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 12px 16px 32px;
  position: relative;
`;

export const WaferCircle = styled.img`
  width: 86%;
  max-width: 560px;
  height: auto;
  display: block;
  border-radius: 50%;
  pointer-events: none;
`;

export const DieButton = styled.button`
  position: absolute;
  transform: translate(-50%, -50%);
  width: clamp(18px, 3.8vw, 26px);
  height: clamp(18px, 3.8vw, 26px);
  border: none;
  background: transparent;
  padding: 0;
  cursor: pointer;
`;

export const DieImg = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  outline: 2px solid #ff3b30; /* 빨간 테두리 */
  outline-offset: 1px;
  border-radius: 2px;
`;

export const InspectArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8px 20px 28px;
  gap: 18px;
`;

export const ChipPreview = styled.img`
  width: min(82%, 520px);
  height: auto;
  border-radius: 8px;
  box-shadow: 0 4px 16px rgba(0,0,0,0.08);
`;

export const ReadingBox = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
  text-align: center;
`;

export const ReadingRow = styled.div`
  display: flex;
  gap: 8px;
  justify-content: center;
`;

export const ReadingLabel = styled.div`
  ${({ theme }) => theme.fonts.InterB1};
`;

export const ReadingValue = styled.div`
  ${({ theme }) => theme.fonts.InterB1};
`;

export const SpecBox = styled.div`
  width: 80%;
  max-width: 560px;
  border-radius: 12px;
  padding: 16px 18px;
  background: #f7f8fa;
  border: 1px solid #eef0f3;
`;

export const SpecTitle = styled.div`
  margin-bottom: 4px;
  ${({ theme }) => theme.fonts.InterB3};
  color: ${({ theme }) => theme.colors.gray400};
`;

export const SpecText = styled.div`
  ${({ theme }) => theme.fonts.InterM3};
  color: ${({ theme }) => theme.colors.gray01};
`;

export const SpecDivider = styled.div`
  height: 12px;
`;

export const QuestionArea = styled.div`
  width: 85%;
  max-width: 560px;
  margin-top: 4px;
  border-radius: 16px;
  padding: 20px 16px;
  text-align: center;

  background:
    linear-gradient(#ffffff, #ffffff) padding-box,
    linear-gradient(135deg, #7ad4ff 0%, #625bff 50%, #a66cff 100%) border-box;
  border: 2px solid transparent;
  box-shadow:
    0 10px 24px rgba(98, 91, 255, 0.18),
    0 2px 0 rgba(255, 255, 255, 0.8) inset;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: 14px;
    pointer-events: none;
    box-shadow: 0 0 0 1px rgba(255, 255, 255, 0.6) inset;
  }
`;


export const Question = styled.div`
  ${({ theme }) => theme.fonts.InterB1};
  margin-bottom: 12px;
`;

export const AnswerButtons = styled.div`
  display: flex;
  gap: 12px;
  justify-content: center;
`;

const BaseBtn = styled.button`
  flex: 1 1 auto;
  max-width: 220px;
  height: 40px;
  border-radius: 999px;
  ${({ theme }) => theme.fonts.InterB3};
  border: none;
  cursor: pointer;
`;

export const AnswerBtn = styled(BaseBtn)`
  background: ${({ theme }) => theme.colors.purple300};
  color: white;
`;

export const AnswerBtnNegative = styled(BaseBtn)`
  background: ${({ theme }) => theme.colors.red02};
  color: white;
`;

export const SummaryWrap = styled.div`
  display: flex;
  justify-content: center;
  margin: 10px 0 24px;
`;

const popIn = keyframes`
  0%   { transform: translateY(8px) scale(0.96); opacity: 0; filter: blur(2px); }
  60%  { transform: translateY(0) scale(1.02); opacity: 1; filter: blur(0); }
  100% { transform: translateY(0) scale(1);    opacity: 1; }
`;

export const SummaryCard = styled.div`
  width: 85%;
  max-width: 560px;
  border-radius: 16px;
  padding: 18px 16px;
  text-align: left;

  background:
    linear-gradient(#ffffff, #ffffff) padding-box,
    linear-gradient(135deg, #7ad4ff 0%, #625bff 50%, #a66cff 100%) border-box;
  border: 2px solid transparent;
  box-shadow:
    0 12px 28px rgba(98, 91, 255, 0.18),
    0 2px 0 rgba(255, 255, 255, 0.8) inset;

  position: relative;

  &::after {
    content: "";
    position: absolute;
    inset: 2px;
    border-radius: 14px;
    pointer-events: none;
    box-shadow: 0 0 0 1px rgba(255,255,255,0.6) inset;
  }

  animation: ${popIn} 900ms cubic-bezier(.2,.8,.2,1) forwards;
`;

export const SummaryRowBold = styled.div`
  ${({ theme }) => theme.fonts.InterB1};
  margin-bottom: 10px;
`;

export const SummaryRow = styled.div`
  ${({ theme }) => theme.fonts.InterM3};
  color: ${({ theme }) => theme.colors.gray01};
`;

export const Feedback = styled.div`
  margin-top: 10px;
  font-size: 14px;
  font-weight: 700;
  color: #ef4444; /* 붉은색 경고 */
`;