import styled, { css } from "styled-components";

export const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, minmax(120px, 34vw));
  gap: clamp(16px, 4vw, 28px);
  justify-content: center;
  margin: clamp(18px, 4vh, 32px) auto 0;
  width: 100%;
  max-width: 520px;

  & > *:last-child {
    grid-column: 1 / -1;
    justify-self: center;
  }
`;

export const Card = styled.div`
  width: clamp(120px, 34vw, 200px);
  height: clamp(120px, 34vw, 200px);
  border-radius: 14px;
  cursor: pointer;
  transition: transform .15s ease, box-shadow .15s ease;
  box-shadow: 0 8px 18px rgba(0,0,0,0.12);
  background: #0e1230;

  ${({ $selected }) =>
    $selected
      ? css`outline: 6px solid #5a5af7; transform: translateY(-2px);`
      : css`outline: 0; &:hover{ transform: translateY(-2px); }`}

  display: grid; place-items: center;
`;

export const CardInner = styled.div`
  width: 78%; height: 78%;
  border-radius: 12px;
  background: ${({ $selected }) => ($selected ? "#5959F7" : "transparent")};
  display: grid; place-items: center; 
`;
