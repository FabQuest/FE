import React from "react";
import Oxidation from "./assets/Oxidation.png";
import * as S from "./styled";
import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors, DragOverlay, closestCenter } from "@dnd-kit/core";
import { TargetDroppable, ChipDraggable } from "./DndPieces";
import { useOxidationGame } from "./hooks/useOxidationGame";
import { TARGETS, OPTIONS } from "./constants";
import StepLayout from "@components/layout/StepLayout/StepLayout";
import { STEP_CONTENT } from "@constants/stepContent";
import StepCompletionModal from "@components/common/Modal/StepCompletionModal";

const Step2Page = () => {
  const {
    openComplete,
    setOpenComplete,
    placements,
    activeId,
    handleDragStart,
    handleDragEnd,
    handleDragCancel,
  } = useOxidationGame();

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 4 } }),
    useSensor(TouchSensor, { pressDelay: 80, pressThreshold: 8 })
  );

  const content = STEP_CONTENT[2];

  const modalProps = {
    open: openComplete,
    onClose: () => setOpenComplete(false),
    stepNumber: 2,
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
        <S.Playground>
          <S.ImageWrap>
            <S.ProcessImage src={Oxidation} alt="산화공정 장비" />
            {TARGETS.map((t) => {
              const placed = placements[t.id];
              return (
                <TargetDroppable
                  key={t.id}
                  id={t.id}
                  style={{ left: `${t.xPct * 100}%`, top: `${t.yPct * 100}%` }}
                  filled={!!placed}
                  placedText={placed ? OPTIONS.find(o => o.id === placed)?.text : ""}
                >
                  <S.TargetLabel>{t.label}</S.TargetLabel>
                </TargetDroppable>
              );
            })}
          </S.ImageWrap>

          <S.ChipsRow>
            {OPTIONS.filter(o => !Object.values(placements).includes(o.id)).map((opt) => (
              <ChipDraggable key={opt.id} id={opt.id}>
                {opt.text}
              </ChipDraggable>
            ))}
          </S.ChipsRow>
        </S.Playground>

        <DragOverlay>
          {activeId ? <S.ChipBase style={{ boxShadow: "0 10px 24px rgba(50,80,200,.3)" }}>
            {OPTIONS.find(o => o.id === activeId)?.text}
          </S.ChipBase> : null}
        </DragOverlay>
      </DndContext>
    </StepLayout>
  );
};

export default Step2Page;
