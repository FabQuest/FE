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
  cursor: pointer;
  background: ${({ $isGradation, theme }) =>
    $isGradation
      ? "linear-gradient(270deg, #000 0%, #0037FF 25%, #ACBEFF 50%, #0037FF 75%, #000 100% )"
      : theme.colors.blue300};

  ${({ $isGradation }) =>
    $isGradation &&
    `
      background-size: 300% 300%;
      animation: gradientShift 6s linear infinite;
    `}

  @keyframes gradientShift {
    0% {
      background-position: 300% 50%;
    }
    100% {
      background-position: 0% 50%;
    }
  }
`;
export const LogoImg = styled.img`
  display: flex;
  align-items: center;
  justify-content: center;
`;
