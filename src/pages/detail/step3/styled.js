import styled, { css } from "styled-components";

export const PageContainer = styled.div`
  display: flex; flex-direction: column; min-height: 100dvh; width: 100%;
  background: ${({ theme }) => theme.colors.white};
  overflow: hidden;
`;
