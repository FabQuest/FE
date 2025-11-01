import styled, { keyframes } from "styled-components";

const bulbPop = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.2); }
  100% { transform: scale(1); }
`;

export const BulbWrap = styled.div`
  display: grid;
  place-items: center;
  margin: 7vh 0 6px;

  img {
    width: 64px;
    height: auto;
    transform-origin: bottom;
  }

  &.is-on img {
    animation: ${bulbPop} 0.4s ease-in-out;
  }
`;

export const Stage = styled.div`
  width: min(86%, 560px);
  height: 300px;
  margin: 4px auto 10px;
  position: relative;

  .board {
    position: relative;
    transform-origin: top left;
    will-change: transform;
  }

  .wiring {
    position: absolute;
    inset: 0;
    width: 100%;
    height: 100%;
    user-select: none;
    pointer-events: none;
  }

  .slot {
    position: absolute;
    transform: translate(-50%, -50%);
  }

  .piece {
    position: relative;
    display: block;
    width: auto;
    height: auto;
    max-width: none;
    object-fit: initial;
    user-select: none;
    pointer-events: none;
  }
`;

export const Tray = styled.div`
  width: min(90%, 560px);
  margin: 8px auto 28px;
  padding: 14px 16px 10px;
  border-radius: 16px;
  border: 2px solid #9fb1ff;
  background: linear-gradient(135deg, #eef2ff, #f6f7ff);
  box-shadow: 0 4px 16px rgba(26, 38, 89, 0.06);

  .tray-inner {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    justify-items: center;
    align-items: center;
    gap: min(16px, 4vw);
  }

  .tray-item {
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    padding: 8px 10px;
    border-radius: 12px;
    border: 1px solid #cfd6ff;
    background: #ffffff;
    box-shadow: 0 2px 8px rgba(50, 67, 145, 0.07);
    transition: box-shadow 0.12s ease;

    &.is-dragging {
      cursor: grabbing;
      box-shadow: 0 8px 24px rgba(92, 110, 248, 0.3);
    }

    &:disabled {
      opacity: 0.45;
      cursor: default;
      filter: grayscale(0.25);
    }

    img {
      width: auto;
      object-fit: contain;
      user-select: none;
      pointer-events: none;
    }
  }

  .hint {
    margin: 12px 0 2px;
    font-size: 12px;
    color: #6b7280;
    text-align: center;
  }
`;
