import styled from "styled-components";
export const Wrapper = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  padding-top: 2rem;
  justify-content: center;
  align-items: flex-start;
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  gap: 3rem;
  @media (max-height: 680px) {
    gap: 5px;
  }
`;
export const Background = styled.img`
  position: absolute;
  inset: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
`;
