import styled from "styled-components";

export const HeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  padding: 16px;
`;

export const BackButton = styled.img`
  position: absolute;
  left: 16px;
  cursor: pointer;
  height: 16px;
`;

export const Title = styled.h1`
  ${({ theme }) => theme.fonts.InterM1};
  color: ${({ theme }) => theme.colors.gray06};
`;
