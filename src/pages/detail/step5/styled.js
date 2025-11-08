import styled, { keyframes, css } from "styled-components";

const shake = keyframes`
  0% { transform: translateX(0); }
  50% { transform: translateX(12px); }
  100% { transform: translateX(0); }
`;

const slideFadeDown = keyframes`
  0%   { transform: translateY(0); opacity: 1; }
  100% { transform: translateY(40px); opacity: 0; }
`;

const fadeInSoft = keyframes`
  0%   { opacity: 0; transform: scale(0.98); }
  100% { opacity: 1; transform: scale(1); }
`;

const arrowsEnter = keyframes`
  0%   { opacity: 0; transform: translateY(-8px); }
  100% { opacity: 1; transform: translateY(0); }
`;
const arrowsExit = keyframes`
  0%   { opacity: 1; transform: translateY(0); }
  100% { opacity: 0; transform: translateY(30px); }
`;

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100dvh;
  width: 100%;
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

export const ImagesWrap = styled.div`
  display: grid;
  place-items: center;
  margin: 8vh 0 8px;
  width: 100%;
  gap: 3vh;
  position: relative;

  .topSlot {
    display: flex;
    align-items: center;
    justify-content: center;
    --ionH: clamp(80px, 18vw, 140px);
    width: min(60%, 420px);
    max-width: 420px;
  }

  .pellicle {
    width: 260px;
    height: auto;
    object-fit: contain;
    margin-bottom: 12px;
    will-change: transform, opacity;
    z-index: 2;
  }
  .pellicle.exit {
    animation: ${slideFadeDown} 0.9s ease forwards;
  }

  .arrow-row {
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 15px;
    height: var(--ionH);  
    width: 260px;
    opacity: 0; 
  }
  .arrow-row.enter {
    animation: ${arrowsEnter} 0.6s ease forwards;
  }
  .arrow-row.exit {
    animation: ${arrowsExit} 0.8s ease forwards;
  }
  .arrow-row .arrow {
    height: 100%;
    width: 30px;
    object-fit: contain;
    flex: 0 0 auto;
    transition: transform 0.15s ease; 
  }

  .waferStack {
    position: relative;
    width: 300px;
    max-width: 420px;
    aspect-ratio: 7 / 3;       
  }
  .waferStack .wafer {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    object-fit: contain;
    transition: opacity 0.6s ease, transform 0.6s ease;
    will-change: opacity, transform;
  }
  .waferStack .wafer.before { opacity: 1; transform: scale(1);   z-index: 1; }
  .waferStack .wafer.after  { opacity: 0; transform: scale(0.98); z-index: 2; }

  .waferStack.swap .wafer.before { opacity: 0; transform: scale(1.02); }
  .waferStack.swap .wafer.after  { opacity: 1; transform: scale(1);    }

`;

export const LabelRow = styled.div`
  width: 100%;
  padding: 0 8vw;
  max-width: 520px;
  display: flex;
  justify-content: space-between;
  color: ${({ theme }) => theme.colors.black};
  ${({ theme }) => theme.fonts.InterR1};
  margin-top: 6vh;
`;

export const GaugeWrap = styled.div`
  width: 100%;
  padding: 0 8vw;
  max-width: 520px;
  margin: 6px 0 22px;

  .track {
    position: relative;
    width: 100%;
    height: 28px;
    border-radius: 22px;
    background: #ddd;
    overflow: hidden;

    ${({ failed }) =>
      failed &&
      css`
        animation: ${shake} 0.45s ease;
      `}
  }

  .target {
    position: absolute;
    top: 0;
    height: 100%;
    background: #a7eec0;
    border-radius: 22px;
  }

  .knob {
    position: absolute;
    top: 50%;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #ffffff;
    border: 3px solid #5c6ef8;
    transform: translate(-50%, -50%);
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
    pointer-events: none;

    &.running {
      box-shadow: 0 6px 16px rgba(0,0,0,0.2);
    }
  }

  .hint {
    margin: 8px 0 0;
    color: ${({ theme }) => theme.colors.gray01};
    ${({ theme }) => theme.fonts.InterR2};
    text-align: center;
  }
`;

export const AngleWrap = styled.div`
  width: 100%;
  padding: 0 8vw;
  max-width: 520px;
  margin: 6px 0 22px;

  .angle-range {
    -webkit-appearance: none;
    appearance: none;
    width: 100%;
    height: 28px;
    border-radius: 22px;
    outline: none;
    background: linear-gradient(90deg, #4fc3ff, #7b5cff);
  }
  .angle-range::-webkit-slider-runnable-track {
    height: 28px;
    border-radius: 22px;
    background: #ddd;
  }
  .angle-range::-moz-range-track {
    height: 28px;
    border-radius: 22px;
    background: #ddd;
  }
  .angle-range::-webkit-slider-thumb {
    -webkit-appearance: none;
    appearance: none;
    position: relative;
    margin-top: -2px;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #fff;
    border: 3px solid #5c6ef8;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  }
  .angle-range::-moz-range-thumb {
    width: 30px;
    height: 30px;
    border-radius: 50%;
    background: #fff;
    border: 3px solid #5c6ef8;
    box-shadow: 0 4px 10px rgba(0,0,0,0.15);
  }

  .ticks {
    margin-top: 8px;
    display: flex;
    justify-content: space-between;
    color: ${({ theme }) => theme.colors.gray01};
    ${({ theme }) => theme.fonts.InterR2};
  }

  .hint {
    margin: 8px 0 0;
    color: ${({ theme }) => theme.colors.gray01};
    ${({ theme }) => theme.fonts.InterR2};
    text-align: center;
  }
`;

export const Buttons = styled.div`
  width: 100%;
  display: grid;
  place-items: center;
  margin: 12px 0 40px;
`;

export const PrimaryButton = styled.button`
  min-width: 150px;
  height: 48px;
  border: none;
  border-radius: 16px;
  background: #5c6ef8;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.InterB1};
  box-shadow: 0 6px 0 #3c4fe0;
  cursor: pointer;

  &:active {
    transform: translateY(2px);
    box-shadow: 0 4px 0 #3c4fe0;
  }
`;

export const FireButton = styled(PrimaryButton)`
  background: #ff6b6b;
  box-shadow: 0 6px 0 #d94747;

  &:active {
    box-shadow: 0 4px 0 #d94747;
  }
`;
