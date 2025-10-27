import styled from "styled-components";

export const PrizeBox = styled.div`
  display: flex;
  z-index: 3;
  width: 335px;
  height: 500px;
  padding: 17px 0 22px 0;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 27px;
  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.gray02};
  background: linear-gradient(
      0deg,
      rgba(124, 129, 255, 0.5) 0%,
      rgba(124, 129, 255, 0.5) 100%
    ),
    linear-gradient(
      94deg,
      rgba(0, 0, 0, 0.5) -9.03%,
      rgba(0, 55, 255, 0.5) 63.71%,
      rgba(95, 129, 255, 0.5) 85.68%
    );

  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15);
`;

export const PrizeImg = styled.img`
  display: flex;
  width: 282px;
  height: 295px;
  aspect-ratio: 282/295;
`;
