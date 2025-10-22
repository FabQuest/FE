import styled from "styled-components";
export const NameWrapper = styled.div`
  display: flex;
  height: 100%;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
`;
export const NameInputContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
export const MainText = styled.div`
  display: flex;
  ${({ theme }) => theme.fonts.InterB2};
  color: ${({ theme }) => theme.colors.white};
`;

export const InputWrapper = styled.div`
  display: flex;
  align-items: center;
  position: relative;
`;

export const LogoImg = styled.img`
  position: absolute;
  left: 21px;
  width: 20px;
  height: 20px;
`;

export const NameInput = styled.input`
  display: flex;
  padding: 18px;
  padding-left: 3rem;
  width: 316px;
  height: 60px;
  flex-direction: row;
  border-radius: 16px;
  &::placeholder {
    color: ${({ theme }) => theme.colors.purple100};
    ${({ theme }) => theme.fonts.InterR1};
  }
  color: ${({ theme }) => theme.colors.purple100};
  border: 1px solid ${({ theme }) => theme.colors.purple100};
  background-color: ${({ theme }) => theme.colors.black};
`;
