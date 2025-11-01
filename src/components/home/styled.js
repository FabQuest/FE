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
  padding: 2rem;
  width: 334px;
  height: 89px;
  border-radius: 16px;
  gap: 6px;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.black};
  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15);
`;
export const RemoveIcon = styled.img`
  position: absolute;
  top: 10%;
  left: 90%;
  width: 16px;
`;
export const MainText = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.InterB1};
`;

export const SubText = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.InterR3};
`;
