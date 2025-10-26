import React from "react";
import * as S from "./styled";
import { MaskGrid, MaskTriangles, MaskTarget } from "../../assets/Masks";

const MASKS = [
  { id: "mask1", label: "그리드", Comp: MaskGrid },
  { id: "mask2",  label: "삼각형", Comp: MaskTriangles },
  { id: "mask3", label: "과녁",   Comp: MaskTarget },
];

const Step1Component = ({ selected, setSelected }) => {
  return (
    <S.Grid>
      {MASKS.map(({ id, Comp }) => {
        const isSelected = selected === id;
        return (
          <S.Card
            key={id}
            $selected={isSelected}
            role="button"
            tabIndex={0}
            aria-pressed={isSelected}
            onClick={() => setSelected(id)}
            onKeyDown={(e) => (e.key === "Enter" || e.key === " ") && setSelected(id)}
          >
            <S.CardInner $selected={isSelected}>
              <Comp fg="#FFFFFF" />
            </S.CardInner>
          </S.Card>
        );
      })}
    </S.Grid>
  );
};

export default Step1Component;
