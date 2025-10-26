import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

export const Playground = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  overflow: auto;
  --safe-bottom: max(env(safe-area-inset-bottom, 0px), 16px);
  padding-top: 14px;
//   background-color: orange;
`;

export const ImageWrap = styled.div`
  position: relative;
  width: min(92vw, 560px);
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 55vh;
//   background-color: lightgray;
`;

export const ProcessImage = styled.img`
  width: 100%;
  height: auto;
  border-radius: 16px;
  display: block;
  user-select: none;
  -webkit-user-drag: none;
`;

export const TargetBase = styled.div`
  position: absolute;
  transform: translate(-50%, -50%);
  min-width: clamp(110px, 28vw, 160px);
  height: clamp(40px, 6.2vw, 52px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const TargetLabel = styled.div`
  background: #eadf95;
  color: #222;
  font-weight: 700;
  border-radius: 10px;
  padding: 10px 16px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.08);
  pointer-events: none;
  white-space: nowrap;
`;

export const ChipBase = styled.div`
  min-width: clamp(110px, 28vw, 160px);
  height: clamp(40px, 6.2vw, 52px);
  padding: 0 14px;
  border-radius: 12px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(180deg, #d6ecff 0%, #cbe4ff 100%);
  border: 1.5px solid #7aa8ff;
  color: #0f265f;
  font-weight: 700;
  user-select: none;
  -webkit-user-drag: none;
`;

export const ChipFixed = styled(ChipBase)`
  pointer-events: none;
`;

export const ChipsRow = styled.div`
  margin-top: auto;
  display: flex;
  justify-content: center;
  gap: 14px;
  padding: 16px 0 calc(var(--safe-bottom));
   margin-bottom: 15vh;
`;
