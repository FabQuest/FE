import styled from "styled-components";

export const Fragment = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 12px;
`;

export const DescriptionText = styled.p`
  ${({ theme }) => theme.fonts.InterR0};
  text-align: center;
  color: ${({ theme }) => theme.colors.gray01};
  padding: 10px 20px;
  white-space: pre-line;
`;

export const SubDescriptionText = styled.p`
  ${({ theme }) => theme.fonts.InterR2};
  text-align: center;
  color: ${({ theme }) => theme.colors.gray01};
  padding: 10px 20px;
  white-space: pre-line;
  margin-bottom: 20px;
`;

export const HelpButton = styled.img`
  position: absolute;
  bottom: -10px;
  right: 10px;
  width: 44px;
  height: 44px;
  cursor: pointer;
  user-select: none;
  -webkit-tap-highlight-color: transparent;
`;

export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(16, 18, 27, 0.38);
  backdrop-filter: blur(2px);
  z-index: 1000;
`;

export const HelpModal = styled.div`
  position: fixed;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: min(640px, 92vw);
  background: #fff;
  border-radius: 16px;
  box-shadow: 0 18px 50px rgba(0, 0, 0, 0.18);
  z-index: 1001;
  overflow: hidden;
`;

export const HelpHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 16px 18px 8px;
`;

export const HelpTitle = styled.h3`
  ${({ theme }) => theme.fonts.InterB1};
  color: ${({ theme }) => theme.colors.black};
`;

export const CloseBtn = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  color: ${({ theme }) => theme.colors.gray01};
  ${({ theme }) => theme.fonts.InterB0};
  &:hover { color: #111827; }
`;

export const HelpBody = styled.div`
  padding: 8px 18px 16px;
  color: ${({ theme }) => theme.colors.gray01};
  ${({ theme }) => theme.fonts.InterR1};
  white-space: pre-line;
`;

export const HelpFooter = styled.div`
  display: flex;
  justify-content: flex-end;
  gap: 8px;
  padding: 12px 16px 16px;
`;

export const PrimaryBtn = styled.button`
  padding: 10px 14px;
  border-radius: 10px;
  border: none;
  background: linear-gradient(135deg, #79c3ff 0%, #6d68ff 100%);
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.InterB3};
  cursor: pointer;
  box-shadow: 0 8px 18px rgba(109, 104, 255, 0.25);

  &:active { transform: translateY(1px); }
`;
