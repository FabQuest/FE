import styled, { keyframes, css } from "styled-components";

export const drawLine = keyframes`
  from { stroke-dashoffset: 200; opacity: 0; }
  to { stroke-dashoffset: 0; opacity: 1; }
`;

export const dashFlow = keyframes`
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -20; }
`;

export const nodePop = keyframes`
  0% { transform: scale(1); }
  40% { transform: scale(1.3); }
  100% { transform: scale(1); }
`;

export const shake = keyframes`
  0%, 100% { transform: translateX(0); }
  25% { transform: translateX(-4px); }
  75% { transform: translateX(4px); }
`;

export const PageContainer = styled.div`
  display: flex; flex-direction: column; min-height: 100dvh; width: 100%;
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;

export const DrawingArea = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 30px;
  touch-action: none;
  user-select: none;

  svg {
    transition: transform 0.3s ease;

    ${({ failed }) =>
      failed &&
      css`
        animation: ${shake} 0.4s ease;
      `}
  }

  .edge-line {
    stroke-dasharray: 200;
    stroke-dashoffset: 0;
    transition: stroke 0.3s ease;
    &.visited {
      animation: ${drawLine} 0.6s ease forwards;
    }
  }

  .preview-line {
    stroke-dasharray: 6 6;
    animation: ${dashFlow} 0.6s linear infinite;
  }

  .node {
    transition: fill 0.2s, transform 0.15s;
    cursor: pointer;
    transform-origin: center;
    transform-box: fill-box;

    &.active {
      animation: ${nodePop} 0.25s ease;
    }
  }
`;

/* 점선 → 실선(드로잉) */
const dashToSolid = keyframes`
  0%   { stroke-dasharray: 4 6; stroke-dashoffset: 0; }
  50%  { stroke-dasharray: 10 0; stroke-dashoffset: 10; }
  100% { stroke-dasharray: 0 0; stroke-dashoffset: 0; }
`;

/* 클릭 피드백: 굵기/색상/글로우 → 원복 */
const flashSolid = keyframes`
  0%   { stroke-width: 2; stroke: #4a6bff; filter: drop-shadow(0 0 1.6px rgba(74,107,255,.7)); }
  70%  { stroke-width: 1.4; stroke: #3b5af7; filter: drop-shadow(0 0 1.2px rgba(74,107,255,.45)); }
  100% { stroke-width: .6; stroke: #111; filter: none; }
`;

export const BoardWrap = styled.div`
  flex: 1;
  display: grid; place-items: center;
  padding: 12px 16px 24px;

  .board {
    width: min(92vw, 560px);
    height: auto;
    max-height: 68vh;
  }

  /* 시각용 라인 */
  .cut-line {
    stroke: #111;
    stroke-width: .6;
    transition: opacity 220ms ease;
    vector-effect: non-scaling-stroke;
    pointer-events: none; /* 히트라인이 클릭을 담당 */
  }
  .cut-line.dashed { stroke-dasharray: 3.5 4.5; opacity: .95; }
  .cut-line.solid {
    stroke-dasharray: 0 0;
    /* 두 개의 애니메이션을 연속 적용 */
    animation: ${dashToSolid} 420ms ease forwards, ${flashSolid} 520ms ease 0ms forwards;
  }
  .cut-line.next { /* 다음 순서만 살짝 강조(시각 힌트) */
    opacity: 1;
    filter: drop-shadow(0 0 .6px rgba(0,0,0,.25));
  }

  /* 히트라인(투명, 터치 폭 ↑) */
  .hit-line {
    stroke: transparent;
    stroke-width: 100;          /* ← 터치 폭 크게 */
    pointer-events: none;     /* 기본은 비활성화 */
  }
  .hit-line.enabled {
    pointer-events: stroke;   /* 다음 순서만 터치 허용 */
    cursor: pointer;
  }

  .axis-label {
    font-size: 3px;
    fill: #111;
    user-select: none;
  }
`;
