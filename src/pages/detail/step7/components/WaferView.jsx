import React from "react";
import * as S from "../styled";
import circle from "../assets/circle.png";
import die from "../assets/die.png";
import Summary from "./Summary";

export default function WaferView({ dies, onClickDie, showSummary, yieldData }) {
  return (
    <>
      <S.WaferArea>
        <S.WaferCircle src={circle} alt="wafer" />
        {dies.map((d) => (
          <S.DieButton
            key={d.id}
            style={{ left: `${d.leftPct}%`, top: `${d.topPct}%` }}
            onClick={() => onClickDie(d)}
          >
            <S.DieImg src={die} alt={`die-${d.id}`} />
          </S.DieButton>
        ))}
      </S.WaferArea>

      {showSummary && <Summary {...yieldData} />}
    </>
  );
}
