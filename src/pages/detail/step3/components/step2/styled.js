import styled from "styled-components";

export const Step2Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  color: gray;
  height: 100%;
`;

export const LightContainer = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  margin-top: 5vh;
  margin-bottom: 10vh;
`;

export const LightImage = styled.img`
  width: 80px;
  height: auto;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: scale(1.1);
  }
`;

export const MaskImage = styled.img`
  max-width: 300px;
  height: auto;
  margin-bottom: 20px;
`;

export const WaferImage = styled.img`
  max-width: 310px;
  height: auto;
`;
