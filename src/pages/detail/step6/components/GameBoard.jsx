import React, { useState } from "react";
import * as S from "../styled";
import { TARGETS } from "../constants/constants";
import { BoardSlot } from "./DndPieces";
import wiring from "../assets/wiring.png";

const GameBoard = ({ placements, trayHeights }) => {
  const [natW, setNatW] = useState(0);
  const [natH, setNatH] = useState(0);

  const onWiringLoad = (e) => {
    const img = e.currentTarget;
    setNatW(img.naturalWidth || 0);
    setNatH(img.naturalHeight || 0);
  };

  return (
    <S.Stage>
      <div
        className="board"
        style={{
          aspectRatio: natW && natH ? `${natW} / ${natH}` : "1 / 1",
          width: "100%",
        }}
      >
        <img
          src={wiring}
          alt="wiring"
          className="wiring"
          onLoad={onWiringLoad}
          draggable={false}
        />

        {natW > 0 && natH > 0 && TARGETS.map((t) => (
          <BoardSlot
            key={t.id}
            id={t.id}
            style={{
              left: `${(t.x / natW) * 100}%`,
              top: `${(t.y / natH) * 100}%`,
            }}
          >
            {placements[t.id] ? null : (
              <img
                src={t.emptySrc}
                alt={t.id}
                className="piece"
                draggable={false}
                style={{ height: trayHeights[t.id] ? `${trayHeights[t.id]}px` : '36px' }}
              />
            )}
          </BoardSlot>
        ))}
      </div>
    </S.Stage>
  );
};

export default GameBoard;
