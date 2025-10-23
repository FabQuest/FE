import styled from "styled-components";
export const LoginBtn = styled.div`
  display: flex;
  width: 100%;
  height: 55px;
  flex-direction: row;
  gap: 10px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.InterB2};
  border: 1px solid ${({ theme }) => theme.colors.white};
  background-color: ${({ theme }) => theme.colors.blue300};
  cursor: pointer;
`;
export const LogoImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
`;
