import React from "react";
import * as S from "../styled";
import { TARGETS } from "../constants/constants";
import { TrayPiece } from "./DndPieces";

const PieceTray = ({ placements, trayHeights, setTrayHeights }) => {
  return (
    <S.Tray>
      <div className="tray-inner">
        {TARGETS.map((t) => {
          const isPlaced = !!placements[t.id];
          return (
            <TrayPiece
              key={t.id}
              id={t.id}
              className="tray-item"
              disabled={isPlaced}
            >
              <img
                src={t.fullSrc}
                alt={t.id}
                style={{ height: trayHeights[t.id] ? `${trayHeights[t.id]}px` : '36px' }}
                onLoad={(e) => {
                  if (trayHeights[t.id]) return;
                  const h = e.currentTarget.naturalHeight || 0;
                  setTrayHeights((p) => ({ ...p, [t.id]: h * 0.25 }));
                }}
              />
            </TrayPiece>
          );
        })}
      </div>
      <p className="hint">조각을 드래그해서 위의 빈칸에 놓으세요.</p>
    </S.Tray>
  );
};

export default PieceTray;
