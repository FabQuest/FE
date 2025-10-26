import styled, { css, keyframes } from "styled-components";

const slideUp = keyframes`
  from { transform: translateY(16px); opacity: 0; }
  to   { transform: translateY(0);    opacity: 1; }
`;

export const BottomBar = styled.div`
  margin-top: auto;
  display: flex; justify-content: flex-end;
  padding: 16px max(16px, env(safe-area-inset-right)) max(16px, env(safe-area-inset-bottom));
  opacity: 0; pointer-events: none;
  ${({ $visible }) =>
    $visible &&
    css`opacity: 1; pointer-events: auto; animation: ${slideUp} .18s ease;`}
`;

export const NextButton = styled.button`
  min-width: 92px; 
  height: 44px; 
  border-radius: 14px; 
  border: none;
  padding: 0 18px; 
  cursor: pointer;
  background: linear-gradient(135deg, #73d0ff, #7b5cff);
  box-shadow: 0 10px 22px rgba(90, 100, 255, .28);
  &:disabled { opacity: .4; cursor: default; box-shadow: none; }
  ${({ theme }) => theme.fonts.InterB3};
  color: ${({ theme }) => theme.colors.white};
`;
