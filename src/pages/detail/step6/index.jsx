import React from "react";
import {
  DndContext,
  DragOverlay,
  MouseSensor,
  TouchSensor,
  useSensor,
  useSensors,
  closestCenter,
} from "@dnd-kit/core";
import CommonHeader from "@components/common/Header/Header";
import CommonDescription from "@components/common/Description/Description";
import Modal from "@components/common/Modal/Modal";
import * as S from "./styled";

import { useWiringGame } from "./hooks/useWiringGame";
import GameBoard from "./components/GameBoard";
import PieceTray from "./components/PieceTray";

const Step6Page = () => {
  const {
    placements,
    activeId,
    trayHeights,
    showModal,
    allPlaced,
    bulbSrc,
    activePiece,
    setTrayHeights,
    handleDragStart,
    handleDragEnd,
    handleDragCancel,
    handleModalClose,
    handleModalConfirm,
  } = useWiringGame();

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 4 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 80, tolerance: 8 } })
  );

  return (
    <S.PageContainer>
      <CommonHeader title="6단계: 금속 배선" />
      <CommonDescription
        text={"배선 상자에 있는 배선 조각을 적절한 위치에 드래그 하여 배선을 완성해 봅시다."}
      />

      <DndContext
        sensors={sensors}
        collisionDetection={closestCenter}
        onDragStart={handleDragStart}
        onDragEnd={handleDragEnd}
        onDragCancel={handleDragCancel}
      >
        <S.BulbWrap className={allPlaced ? "is-on" : ""}>
          <img src={bulbSrc} alt="bulb" />
        </S.BulbWrap>

        <GameBoard placements={placements} />

        <PieceTray
          placements={placements}
          trayHeights={trayHeights}
          setTrayHeights={setTrayHeights}
        />

        <DragOverlay dropAnimation={null}>
          {activeId && activePiece ? (
            <div className="tray-item is-dragging">
              <img
                src={activePiece.fullSrc}
                alt={activePiece.id}
                style={{ height: trayHeights[activeId] ? `${trayHeights[activeId]}px` : '36px' }}
              />
            </div>
          ) : null}
        </DragOverlay>
      </DndContext>

      <Modal
        open={showModal}
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
        title="금속 배선 단계 완료!"
        description="다음 단계인 EDS로 넘어가시겠습니까?"
        confirmText="다음 단계"
        cancelText="나가기"
      />
    </S.PageContainer>
  );
};

export default Step6Page;
