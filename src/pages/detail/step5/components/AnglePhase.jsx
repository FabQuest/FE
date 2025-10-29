import React from "react";
import * as S from "../styled";

const AnglePhase = ({
  angle,
  sliderValue,
  handleAngleChange,
  fire,
}) => {
  return (
    <>
      <S.LabelRow>
        <span>이온 주입 각도</span>
        <span>{Math.round(angle)}°</span>
      </S.LabelRow>

      <S.AngleWrap>
        <input
          type="range"
          min={0}
          max={100}
          value={sliderValue}
          onChange={handleAngleChange}
          className="angle-range"
        />
        <div className="ticks">
          <span>45°</span>
          <span>0°</span>
          <span>-45°</span>
        </div>
        <p className="hint">슬라이더로 각도를 조절해보세요!</p>
      </S.AngleWrap>

      <S.Buttons>
        <S.FireButton onClick={fire}>FIRE 🔥</S.FireButton>
      </S.Buttons>
    </>
  );
};

export default AnglePhase;
