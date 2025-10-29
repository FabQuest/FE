import styled, { keyframes, css } from "styled-components";

// 🔹 선 확정 시 부드러운 드로잉 효과
export const drawLine = keyframes`
  from { stroke-dashoffset: 200; opacity: 0; }
  to { stroke-dashoffset: 0; opacity: 1; }
`;

// 🔹 드래그 프리뷰 선: 반짝이는 흐름
export const dashFlow = keyframes`
  0% { stroke-dashoffset: 0; }
  100% { stroke-dashoffset: -20; }
`;

// 🔹 노드 클릭 시 팝 효과
export const nodePop = keyframes`
  0% { transform: scale(1); }
  40% { transform: scale(1.3); }
  100% { transform: scale(1); }
`;

// 🔹 실패 시 흔들림
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

    /* ✅ 중심 기준으로 scale 적용 */
    transform-origin: center;
    transform-box: fill-box;

    &.active {
      animation: ${nodePop} 0.25s ease;
    }
  }
`;