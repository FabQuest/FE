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
  ${({ theme }) => theme.fonts.InterR0}; /* Smaller font than header's InterB1 */
  text-align: center;
  color: ${({ theme }) => theme.colors.gray01};
  padding: 10px 20px; 
  white-space: pre-line;
  margin-bottom: 20px;
`;

export const HelpButton = styled.img`
  position: absolute;
  bottom: 6px;
  right: 10px;
  width: 44px;
  height: 44px;
  cursor: pointer;
`;
  