import React from "react";
import CommonDescription from "@components/common/Description/Description";
import * as S from "../styled";
import circle from "../assets/circle.png";
import die from "../assets/die.png";
import Summary from "./Summary";

export default function WaferView({ dies, onClickDie, showSummary, yieldData }) {
  return (
    <>
      <CommonDescription text={"빨간색으로 표시된 다이를 눌러 불량 여부를 전부 선별해 봅시다."} />

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
