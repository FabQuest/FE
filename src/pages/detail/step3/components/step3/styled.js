import styled, { keyframes } from "styled-components";

const moveUpDown = keyframes`
  0%, 100% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
`;

export const Step3Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  text-align: center;
  color: gray;
  height: 100%;
`;

export const ClickableContainer = styled.div`
  position: relative;
  width: 150px;
  height: 150px;
  margin-top: 5vh;
  margin-bottom: 10vh;
`;

export const CylinderImage = styled.img`
  width: 90%;
  height: 90%;
  margin-top: 20%;
  cursor: pointer;
  transition: transform 0.5s ease-in-out;
  transform: rotate(${props => props.$isRotated ? '180deg' : '0deg'});
`;

export const ClickImage = styled.img`
  position: absolute;
  top: -15px;
  left: 38%;
  transform: translate(-50%, -50%);
  width: 40px;
  height: 40px;
  animation: ${moveUpDown} 1s ease-in-out infinite;
  pointer-events: none; 
`;

export const WaferImage = styled.img`
  max-width: 300px;
  height: auto;
`;
