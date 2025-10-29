import React from "react";
import * as S from "../styled";

const MeasurePhase = ({
  isRunning,
  failed,
  pos,
  handleStart,
  handleStop,
}) => {
  const TARGET_MIN = 0.35;
  const TARGET_MAX = 0.65;

  return (
    <>
      <S.LabelRow>
        <span>목표 두께</span>
        <span>50nm</span>
      </S.LabelRow>

      <S.GaugeWrap failed={failed}>
        <div className="track">
          <div
            className="target"
            style={{
              left: `${TARGET_MIN * 100}%`,
              width: `${(TARGET_MAX - TARGET_MIN) * 100}%`,
            }}
          />
          <div
            className={`knob ${isRunning ? "running" : ""}`}
            style={{ left: `${pos * 100}%` }}
          />
        </div>
        <p className="hint">
          녹색 영역에서 <b>STOP</b>을 누르세요!
        </p>
      </S.GaugeWrap>

      <S.Buttons>
        {!isRunning ? (
          <S.PrimaryButton onClick={handleStart}>시작하기</S.PrimaryButton>
        ) : (
          <S.PrimaryButton onClick={handleStop}>STOP</S.PrimaryButton>
        )}
      </S.Buttons>
    </>
  );
};

export default MeasurePhase;
