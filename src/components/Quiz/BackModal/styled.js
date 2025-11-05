import styled from "styled-components";
export const Overlay = styled.div`
  position: fixed;
  inset: 0;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1000;
`;
export const ModalContainer = styled.div`
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 20px;
  width: 335px;
  min-height: 150px;
  border-radius: 16px;
  gap: 1rem;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15);
`;
export const TextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 80%;
  flex-direction: column;
`;
export const MainText = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.InterB1};
  color: ${({ theme }) => theme.colors.gray400};
`;

export const SubText = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.InterM4};
  color: ${({ theme }) => theme.colors.gray300};
`;
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  width: 80%;
  gap: 8px;
  justify-content: center;
  align-items: center;
`;
export const BackBtn = styled.div`
  display: flex;
  padding: 8px 16px;
  min-width: 120px;
  justify-content: center;
  align-items: center;
  border-radius: 1rem;
  cursor: pointer;

  ${({ theme }) => theme.fonts.InterB2};

  background: ${({ $isBack, theme }) =>
    $isBack ? theme.colors.white : theme.colors.purple300};
  color: ${({ $isBack, theme }) =>
    $isBack ? theme.colors.gray200 : theme.colors.white};
  border: 1px solid
    ${({ $isBack, theme }) =>
      $isBack ? theme.colors.gray100 : theme.colors.purple300};
`;
