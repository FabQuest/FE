import styled from "styled-components";

export const BackGround = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(
    167deg,
    #000 10%,
    #4e64b4 35%,
    #0037ff 50%,
    #6385ff 70%,
    #4e64b4 80%,
    #000 90%
  );
  background-size: 200% 200%;

  animation: flowLoop 25s linear infinite;

  @keyframes flowLoop {
    0% {
      background-position: 45% 10%;
    }
    25% {
      background-position: 55% 80%;
    }
    50% {
      background-position: 50% 100%;
    }
    75% {
      background-position: 52% 170%;
    }
    100% {
      background-position: 45% 200%;
    }
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  gap: 32px;
`;

export const LogoImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const TextWrapper = styled.div`
  display: flex;
  gap: 9px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
export const LoginText = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.InterM2};
  color: ${({ theme }) => theme.colors.purple100};
`;
