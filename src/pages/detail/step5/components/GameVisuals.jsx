import React from "react";
import * as S from "../styled";
import wafer_before from "../assets/wafer_before.png";
import wafer_after from "../assets/wafer_after.png";
import pellicle from "../assets/pellicle.png";
import arrow from "../assets/arrow.png";

const GameVisuals = ({
  pellicleGone,
  pellicleExiting,
  arrowsEnter,
  arrowsExit,
  angle,
  success,
  pellicleRef,
  slotW,
  slotH,
}) => {
  return (
    <S.ImagesWrap>
      <div
        className="topSlot"
        style={{
          width: slotW ? `${slotW}px` : undefined,
          height: slotH ? `${slotH}px` : undefined,
        }}
      >
        {!pellicleGone ? (
          <img
            ref={pellicleRef}
            src={pellicle}
            alt="pellicle"
            className={`pellicle ${pellicleExiting ? "exit" : ""}`}
          />
        ) : (
          <div
            className={`arrow-row ${arrowsEnter ? "enter" : ""} ${arrowsExit ? "exit" : ""}`}
          >
            {Array.from({ length: 5 }).map((_, i) => (
              <img
                key={i}
                src={arrow}
                alt="arrow"
                className="arrow"
                style={{ transform: `rotate(${angle}deg)` }}
              />
            ))}
          </div>
        )}
      </div>

      <div className={`waferStack ${success ? "swap" : ""}`}>
        <img src={wafer_before} alt="wafer before" className="wafer before" />
        <img src={wafer_after} alt="wafer after" className="wafer after" />
      </div>
    </S.ImagesWrap>
  );
};

export default GameVisuals;
