import styled, { keyframes } from "styled-components";

export const PageContainer = styled.div`
  display: flex; flex-direction: column; min-height: 100dvh; width: 100%;
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

const dashToSolid = keyframes`
  0%   { stroke-dasharray: 4 6; stroke-dashoffset: 0; }
  50%  { stroke-dasharray: 10 0; stroke-dashoffset: 10; }
  100% { stroke-dasharray: 0 0; stroke-dashoffset: 0; }
`;
const flashSolid = keyframes`
  0%   { stroke-width: 2; stroke: #4a6bff; filter: drop-shadow(0 0 1.6px rgba(74,107,255,.7)); }
  70%  { stroke-width: 1.4; stroke: #3b5af7; filter: drop-shadow(0 0 1.2px rgba(74,107,255,.45)); }
  100% { stroke-width: .6; stroke: #111; filter: none; }
`;
const wireGrow = keyframes`
  0% { stroke-dasharray: 0 200; }
  100% { stroke-dasharray: 200 0; }
`;

export const BoardWrap = styled.div`
  flex: 1;
  display: grid; place-items: center;
  padding: 12px 16px 24px;

  .board {
    width: min(92vw, 560px);
    height: auto;
    max-height: 68vh;
    -webkit-tap-highlight-color: transparent;
    touch-action: manipulation;
  }

  .cut-line {
    stroke: #111;
    stroke-width: .6;
    transition: opacity 220ms ease;
    vector-effect: non-scaling-stroke;
    pointer-events: none;
  }
  .cut-line.dashed { stroke-dasharray: 3.5 4.5; opacity: .95; }
  .cut-line.solid { animation: ${dashToSolid} 420ms ease forwards, ${flashSolid} 520ms ease 0ms forwards; }
  .cut-line.next { filter: drop-shadow(0 0 .6px rgba(0,0,0,.25)); }

  .hit-line {
    stroke: transparent;
    stroke-width: 14;
    pointer-events: none;
  }
  .hit-line.enabled { pointer-events: stroke; cursor: pointer; }

  .axis-label { font-size: 3px; fill: #111; user-select: none; }

  .pad-group { cursor: pointer; }

  .pad.selected {
    outline: none;
    stroke: #fff;
    stroke-width: 1.2;
    filter: drop-shadow(0 0 2px rgba(255,255,255,.75));
  }

  .wire {
    stroke: #fff;
    stroke-width: 1.4;
    fill: none;
    stroke-linecap: round;
    stroke-dasharray: 200 0;
    animation: ${wireGrow} 420ms ease forwards;
    filter: drop-shadow(0 0 1px rgba(255,255,255,.55));
  }
`;

const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const Step3Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  color: gray;
  height: 100%;
  position: relative;
`;

export const ClickableContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin-top: 2vh;
  margin-bottom: 5vh;
`;

export const CylinderImage = styled.img`
  width: 90%;
  height: 90%;
  margin-top: 20%;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
  transform: rotate(${props => props.$isRotated ? '180deg' : '0deg'});
`;

export const ClickImage = styled.img`
  position: absolute;
  top: -15px;
  left: 38%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  animation: ${moveUpDown} 1s ease-in-out infinite;
  pointer-events: none; 
`;

export const WireImage = styled.img`
  max-width: 300px;
  height: auto;
`;

export const CompleteCard = styled.div`
  width: min(680px, 80vw);
  margin: 12px auto 24px;
  padding: 28px 24px;
  border-radius: 16px;
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
  text-align: center;
`;

export const CompleteTitle = styled.h3`
  margin: 0 0 12px;
  color: ${({ theme }) => theme.colors.gray400};
  ${({ theme }) => theme.fonts.InterB1}
`;

export const CompleteDesc = styled.p`
  color: ${({ theme }) => theme.colors.gray300};
  ${({ theme }) => theme.fonts.InterR2}
`;

export const SemiconductorWrap = styled.div`
  display: grid;
  place-items: center;
  margin-top: 28px;
`;

export const SemiconductorImg = styled.img`
  width: min(720px, 92vw);
  height: auto;
  display: block;
  filter: drop-shadow(0 12px 28px rgba(0,0,0,0.1));
  border-radius: 14px;
`;

export const InteractiveWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.4s ease-in-out;
  opacity: ${props => (props.$isCompleted ? 0 : 1)};
  pointer-events: ${props => (props.$isCompleted ? 'none' : 'auto')};
`;

export const CompletedWrap = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  transition: opacity 0.5s ease-in-out 0.2s;
  opacity: ${props => (props.$isCompleted ? 1 : 0)};
  pointer-events: ${props => (props.$isCompleted ? 'auto' : 'none')};
`;

const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(4px); }
  to   { opacity: 1; transform: translateY(0); }
`;

export const Backdrop = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.35);
  backdrop-filter: blur(2px);
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 1000;
`;

export const Dialog = styled.div`
  width: min(88vw, 520px);
  background: ${({ theme }) => theme.colors?.white || "#fff"};
  border-radius: 16px;
  box-shadow: 0 10px 28px rgba(0, 0, 0, 0.18);
  padding: 24px 20px 18px;
  animation: ${fadeIn} 160ms ease forwards;
`;

export const Actions = styled.div`
  ${({ $hideCancel }) => $hideCancel ?  `display: flex;` : `display: grid; grid-template-columns: 1fr 1fr;`}
  gap: 12px;
  margin-top: 6px;
`;

export const OutlineButton = styled.button`
  height: 44px;
  border-radius: 12px;
  border: 1.5px solid ${({ theme }) => theme.colors?.gray100 || "#CBD1E1"};
  background: #fff;
  color: ${({ theme }) => theme.colors?.gray200 || "#949DB8"};
  ${({ theme }) => theme.fonts?.InterB2 || ""};
`;

export const PrimaryButton = styled.button`
  height: 44px;
  border-radius: 12px;
  border: none;
  background: ${({ theme }) => theme.colors?.blue1000 || "#4F46E5"};
  color: ${({ theme }) => theme.colors?.white};
  ${({ theme }) => theme.fonts?.InterB2 || ""};
  ${({ $hideCancel }) => $hideCancel && `width: 100%;`}
`;

export const ModalImage1 = styled.img`
  max-width: 80vw;
  height: auto;
  margin-bottom: 12px;
`;

export const ModalImage2 = styled.img`
  max-width: 80vw;
  height: auto;
  margin-bottom: 12px;
`;