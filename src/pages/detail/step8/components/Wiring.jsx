import React from "react";
import BottomButton from "@components/common/BottomButton/BottomButton";
import * as S from "../styled";
import { useWiringGame } from "../hooks/useWiringGame";

export default function Wiring({ onDone }) {
  const { pads, selected, wires, allDone, onPadClick } = useWiringGame();

  return (
    <>
      <S.BoardWrap>
        <svg viewBox="0 0 100 100" className="board" aria-label="wire-bonding">
          <rect
            x="10"
            y="20"
            width="80"
            height="50"
            rx="0.6"
            fill="#3f5a39"
            stroke="#111"
            strokeWidth="0.6"
          />
          <rect
            x="26"
            y="28"
            width="44"
            height="35"
            rx="0.6"
            fill="#5a5556"
            stroke="#111"
            strokeWidth="0.6"
          />

          {pads.map((p) => (
            <g key={p.id} onClick={() => onPadClick(p)} className="pad-group">
              <rect
                x={p.x - p.size / 2}
                y={p.y - p.size / 2}
                width={p.size}
                height={p.size}
                fill={p.color}
                stroke="#111"
                strokeWidth="0.6"
                className={`pad${selected && selected.id === p.id ? " selected" : ""}`}
                data-side={p.side}
              />
            </g>
          ))}

          {wires.map((w, i) => {
            const sx = w.from.x,
              sy = w.from.y;
            const tx = w.to.x,
              ty = w.to.y;

            const mx = (sx + tx) / 2 + 6;
            const my = Math.min(sy, ty) - 12;

            return <path key={i} d={`M ${sx} ${sy} Q ${mx} ${my} ${tx} ${ty}`} className="wire" />;
          })}
        </svg>
      </S.BoardWrap>

      <BottomButton visible={allDone} onClick={onDone} text="다음" />
    </>
  );
}
