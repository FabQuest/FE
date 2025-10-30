import styled from "styled-components";

export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Background = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100%;
  gap: 25px;
  z-index: 1;
`;
export const MyIcon = styled.img`
  display: flex;
  width: 99px;
`;
export const MyInfoBox = styled.div`
  display: flex;
  width: 335px;
  padding: 19px 26px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.black};
  border-radius: 16px;
  background-color: ${({ theme }) => theme.colors.white};

  box-shadow: 0 1px 2px 0 rgba(0, 0, 0, 0.3), 0 1px 3px 1px rgba(0, 0, 0, 0.15);
  @media (max-height: 680px) {
    margin-top: 2rem;
  }
`;
export const MyName = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.InterB0};
`;
export const MyInfoText = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.InterR3};
`;

export const BadgeContainer = styled.div`
  display: flex;
  width: 335px;
  padding: 22px 0;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 16px;

  border: 1px solid ${({ theme }) => theme.colors.gray03};
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
  @media (max-height: 680px) {
    margin-bottom: 6rem;
  }
`;

export const BadgeTextBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  gap: 7px;
`;
export const BadgeText = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.white};
  ${({ theme }) => theme.fonts.RiaSansB2};
`;
export const BadgeScore = styled.div`
  display: flex;
  color: ${({ theme }) => theme.colors.gray03};
  ${({ theme }) => theme.fonts.InterM3};
`;
export const BadgeImg = styled.img`
  display: flex;
  width: 122px;
`;
