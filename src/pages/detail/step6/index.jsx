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
import * as S from "./styled";
import { useWiringGame } from "./hooks/useWiringGame";
import GameBoard from "./components/GameBoard";
import PieceTray from "./components/PieceTray";
import StepLayout from "@components/layout/StepLayout/StepLayout";
import { STEP_CONTENT } from "@constants/stepContent";
import StepCompletionModal from "@components/common/Modal/StepCompletionModal";

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
  } = useWiringGame();

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 4 } }),
    useSensor(TouchSensor, { activationConstraint: { delay: 80, tolerance: 8 } })
  );

  const content = STEP_CONTENT[6];

  const modalProps = {
    open: showModal,
    onClose: handleModalClose,
    stepNumber: 6,
    modalContent: content.modal,
  };

  return (
    <StepLayout
      title={content.title}
      description={content.description}
      helpText={content.helpText}
      ModalComponent={StepCompletionModal}
      modalProps={modalProps}
    >
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
    </StepLayout>
  );
};

export default Step6Page;
