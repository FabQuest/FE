import styled from "styled-components";

export const BackGround = styled.div`
  width: 100%;
  height: 100vh;
  overflow: hidden;
  background: radial-gradient(
    circle at 50% 50%,
    #6385ff 0%,
    #4e64b4 20%,
    #330a94 45%,
    #000 80%
  );
  background-size: 200% 200%;

  animation: moveCircle 15s ease-in-out infinite alternate;

  @keyframes moveCircle {
    0% {
      background-position: 30% 30%;
    }
    25% {
      background-position: 70% 40%;
    }
    50% {
      background-position: 50% 70%;
    }
    75% {
      background-position: 60% 90%;
    }
    85% {
      background-position: 20% 70%;
    }
    100% {
      background-position: 40% 20%;
    }
  }
`;
export const HomeContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  gap: 25px;
  width: 100%;
  overflow: auto;
  @media (max-height: 680px) {
    justify-content: flex-start;
  }
`;
export const LogoImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 254px;
  height: 254px;
`;
export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 6px;
  color: ${({ theme }) => theme.colors.white};
`;
export const NameText = styled.div`
  display: flex;

  ${({ theme }) => theme.fonts.InterB0};
`;

export const SubText = styled.div`
  display: flex;

  ${({ theme }) => theme.fonts.InterB3};
`;
export const BtnContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  width: 254px;
`;
