import React from "react";
import BottomButton from "@components/common/BottomButton/BottomButton";
import * as S from "../styled";
import { useCuttingGame } from "../hooks/useCuttingGame";

export default function Cutting({ onDone }) {
  const {
    nextIndex,
    solidIds,
    verticals,
    horizontals,
    allLines,
    isAllDone,
    handleClickLine,
  } = useCuttingGame();

  return (
    <>
      <S.BoardWrap>
        <svg viewBox="0 0 100 100" className="board" aria-label="wafer-cutting">
          <circle cx="50" cy="40" r="36" fill="#DDBC6B" stroke="#000" strokeWidth="0.6" />

          {allLines.map((ln) => {
            const isSolid = solidIds.has(ln.id);
            const isClickable = ln.id === nextIndex;
            return (
              <g key={ln.id} onClick={() => isClickable && handleClickLine(ln.id)}>
                <line
                  x1={ln.x1} y1={ln.y1} x2={ln.x2} y2={ln.y2}
                  className={`cut-line ${isSolid ? "solid" : "dashed"} ${isClickable ? "next" : ""}`}
                />
                <line
                  x1={ln.x1} y1={ln.y1} x2={ln.x2} y2={ln.y2}
                  className={`hit-line ${isClickable ? "enabled" : ""}`}
                />
              </g>
            );
          })}

          {verticals.map((v) => (
            <text key={`lv-${v.id}`} x={v.labelX} y={v.labelY} className="axis-label" textAnchor="middle">
              {v.id}
            </text>
          ))}
          {horizontals.map((h) => (
            <text key={`lh-${h.id}`} x={h.labelX} y={h.labelY} className="axis-label" textAnchor="start">
              {h.id}
            </text>
          ))}
        </svg>
      </S.BoardWrap>

      <BottomButton visible={isAllDone} onClick={onDone} text="다음" />
    </>
  );
}
