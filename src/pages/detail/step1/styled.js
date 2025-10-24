import styled, { keyframes, css } from "styled-components";
import ScissorImage from "./assets/scissor.png";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: auto;
`;

const cutAcross = keyframes`
  0%   { transform: translate(0, -50%) rotate(0deg) }
  40%  { transform: translate(-30%, -50%) rotate(-5deg) }
  70%  { transform: translate(-70%, -50%) rotate(3deg) }
  100% { transform: translate(-120%, -50%) rotate(0deg) }
`;

export const Stage = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 22px;
`;

export const IngotWrap = styled.div`
  position: relative;
  width: min(82vw, 360px);
  aspect-ratio: 0.36;
  max-height: 62vh;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 25px;
  margin-bottom: 102px;
`;

export const Ingot = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  user-select: none;
  -webkit-user-drag: none;
`;

export const CutLine = styled.div`
  position: absolute;
  left: 16%;
  right: 16%;
  height: 0;
  top: ${({ $topPct }) => `${$topPct * 100}%`};

  border-top: ${({ $isCut, theme }) =>
    $isCut
      ? `3px solid ${theme?.colors?.gray07 || "#111"}`
      : `3px dashed ${theme?.colors?.gray07 || "#111"}`};
  &::after {
    content: "";
    position: absolute;
    left: -12px;
    right: -12px;
    top: -12px;
    bottom: -12px;
  }
  ${({ $isActive }) =>
    $isActive &&
    css`
      cursor: pointer;
      &:hover {
        opacity: 0.9;
        filter: brightness(0.95);
      }
    `}
`;

export const Scissor = styled.img.attrs({ src: ScissorImage })`
  position: absolute;
  top: ${({ $topPct }) => `${$topPct * 100}%`};
  right: 11%;
  // width: 32px; 
  height: 42px;
  transform: translate(0, -50%);
  transition: top 280ms ease;
  ${({ $isCutting }) => $isCutting && css`animation: ${cutAcross} 700ms ease forwards;`}
`;


export const TrackBar = styled.div`
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100%;
  z-index: 100;
  padding: 20px 0; /* Add some padding to the fixed bar */
  background-color: ${({ theme }) => theme.colors.white}; /* Ensure it has a background */

  > img {
    width: min(80vw, 440px); /* Constrain image width */
    margin: 0 auto; /* Center image within the fixed bar */
    height: auto;
    display: block;
  }
`;
