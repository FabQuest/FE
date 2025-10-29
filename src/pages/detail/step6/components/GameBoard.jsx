import React, { useRef, useState, useEffect } from "react";
import * as S from "../styled";
import { TARGETS } from "../constants/constants";
import { BoardSlot } from "./DndPieces";
import wiring from "../assets/wiring.png";

const GameBoard = ({ placements }) => {
  const outerRef = useRef(null);
  const [natW, setNatW] = useState(1);
  const [natH, setNatH] = useState(1);
  const [scale, setScale] = useState(1);

  const onWiringLoad = (e) => {
    const img = e.currentTarget;
    setNatW(img.naturalWidth || 1);
    setNatH(img.naturalHeight || 1);
    requestAnimationFrame(updateScale);
  };

  const updateScale = () => {
    const el = outerRef.current;
    if (!el || !natW) return;
    const s = el.clientWidth / natW;
    setScale(s > 0 ? s : 1);
  };

  useEffect(() => {
    updateScale();
    const ro = new ResizeObserver(updateScale);
    if (outerRef.current) ro.observe(outerRef.current);
    window.addEventListener("resize", updateScale);
    window.addEventListener("orientationchange", updateScale);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", updateScale);
      window.removeEventListener("orientationchange", updateScale);
    };
  }, [natW]);

  return (
    <S.Stage ref={outerRef}>
      <div
        className="board"
        style={{
          width: `${natW}px`,
          height: `${natH}px`,
          transform: `scale(${scale})`,
        }}
      >
        <img
          src={wiring}
          alt="wiring"
          className="wiring"
          onLoad={onWiringLoad}
          draggable={false}
        />

        {TARGETS.map((t) => (
          <BoardSlot
            key={t.id}
            id={t.id}
            style={{ left: `${t.x}px`, top: `${t.y}px` }}
          >
            {placements[t.id] ? null : (
              <img
                src={t.emptySrc}
                alt={t.id}
                className="piece"
                draggable={false}
              />
            )}
          </BoardSlot>
        ))}
      </div>
    </S.Stage>
  );
};

export default GameBoard;
