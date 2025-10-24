import styled, { keyframes } from "styled-components";

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

export const Title = styled.h3`
  margin: 0 0 8px;
  ${({ theme }) => theme.fonts?.InterB1 || ""};
  color: ${({ theme }) => theme.colors?.gray400 || "#333C55"};
  text-align: center;
`;

export const Description = styled.p`
  margin: 0 0 20px;
  text-align: center;
  ${({ theme }) => theme.fonts?.InterM4 || ""};
  color: ${({ theme }) => theme.colors?.gray300 || "#646E8B"};
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
