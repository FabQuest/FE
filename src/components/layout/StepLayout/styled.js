import styled from "styled-components";

export const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100vh;
  width: 100%;
  background-color: ${({ theme }) => theme.colors.white};
  overflow: auto;
`;
