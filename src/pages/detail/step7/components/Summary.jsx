import React from "react";
import * as S from "../styled";

export default function Summary({ yieldPct, normalCount, defectCount, total }) {
  return (
    <S.SummaryWrap>
      <S.SummaryCard $animate>
        <S.SummaryRowBold>수율 결과 : {yieldPct}%</S.SummaryRowBold>
        <S.SummaryRow>정상 다이 : {normalCount}개</S.SummaryRow>
        <S.SummaryRow>불량 다이 : {defectCount}개 (총 {total}개)</S.SummaryRow>
      </S.SummaryCard>
    </S.SummaryWrap>
  );
}