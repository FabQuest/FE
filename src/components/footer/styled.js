import styled from "styled-components";

export const FooterContainer = styled.div`
  width: min(92vw, 450px);
  min-height: 43px;
  padding: 5px;
  position: fixed;
  transform: translateX(-50%);
  left: 50%;
  bottom: 1rem;
  z-index: 2;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: row;
  gap: 30px;

  border-radius: 16px;
  border: 1px solid ${({ theme }) => theme.colors.white};
  background: var(
    --menu,
    linear-gradient(
      92deg,
      #1642c7 8.9%,
      #4061e4 66.38%,
      #1e49d8 72.89%,
      #7989c4 95.22%
    )
  );
`;
export const TabWrapper = styled.div`
  position: relative;
  min-width: 78px;
  border-radius: 20px;
  padding-top: 4px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  cursor: pointer;

  display: flex;
  background: ${({ $active, theme }) =>
    $active ? theme.colors.blue200 : "transparent"};
`;
export const TabText = styled.div`
  display: flex;
  gap: 5px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  ${({ theme }) => theme.fonts.InterB4};
  color: ${({ theme }) => theme.colors.white};
`;
export const TabImg = styled.img`
  display: flex;
  width: 17px;
  height: 17px;
`;
