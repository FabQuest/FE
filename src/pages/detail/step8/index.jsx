import React, { useState } from "react";
import CommonHeader from "@components/common/Header/Header";
import CommonDescription from "@components/common/Description/Description";
import * as S from "./styled";
import Cutting from "./components/Cutting";
import Wiring from "./components/Wiring";
import Fixing from "./components/Fixing";

export default function Step8Page() {
  const [phase, setPhase] = useState("cut");

  return (
    <S.PageContainer>
      <CommonHeader title="8단계: 패키징" />
      <CommonDescription
        text={
          phase === "cut"
            ? "자르기 버튼을 클릭하여 \n각 절취선에 맞게 웨이퍼를 잘라 봅시다."
            : phase === "wire"
            ? "같은 색을 가진 다이(die)와 외부 단자를\n클릭하여 와이어를 형성해 봅시다."
            : "비커 아이콘을 클릭하여 \n와이어와 칩을 고정시켜 봅시다."
        }
      />

      {phase === "cut" ? (
        <Cutting onDone={() => setPhase("wire")} />
      ) : phase === "wire" ? (
        <Wiring onDone={() => setPhase("fix")} />
      ) : (
        <Fixing />
      )}
    </S.PageContainer>
  );
}
