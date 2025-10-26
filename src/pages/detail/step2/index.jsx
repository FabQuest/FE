import React, { useMemo, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import CommonHeader from "@components/common/Header/Header";
import CommonDescription from "@components/common/Description/Description";
import Modal from "@components/common/Modal/Modal";
import Oxidation from "./assets/Oxidation.png";
import * as S from "./styled";
import { DndContext, MouseSensor, TouchSensor, useSensor, useSensors, DragOverlay, closestCenter } from "@dnd-kit/core";
import { TargetDroppable, ChipDraggable } from "./DndPieces"; 

const TARGETS = [
  { id: "rf", label: "RF 파워", xPct: 0.28, yPct: 0.30 },
  { id: "o2", label: "O₂ 유량", xPct: 0.68, yPct: 0.30 },
  { id: "press", label: "압력",  xPct: 0.50, yPct: 0.64 },
];
const OPTIONS = [
  { id: "opt_rf", text: "400 W" },
  { id: "opt_flow", text: "200 sccm" },
  { id: "opt_press", text: "500 mTorr" },
];
const CORRECT = { opt_rf: "rf", opt_flow: "o2", opt_press: "press" };

const Step2Page = () => {
  const navigate = useNavigate();
  const [openComplete, setOpenComplete] = useState(false);
  const [placements, setPlacements] = useState({});
  const [activeId, setActiveId] = useState(null);

  const allMatched = useMemo(
    () => TARGETS.every((t) => placements[t.id]),
    [placements]
  );
  useEffect(() => { if (allMatched) setOpenComplete(true); }, [allMatched]);

  const sensors = useSensors(
    useSensor(MouseSensor, { activationConstraint: { distance: 4 } }),
    useSensor(TouchSensor, { pressDelay: 80, pressThreshold: 8 })
  );

  const handleDragStart = (e) => setActiveId(e.active.id);
  const handleDragEnd = (e) => {
    const { active, over } = e;
    setActiveId(null);
    if (!over) return;
    const optionId = active.id;
    const targetId = over.id;
    if (placements[targetId]) return;
    if (CORRECT[optionId] === targetId) {
      setPlacements((p) => ({ ...p, [targetId]: optionId }));
    }
  };
  const handleDragCancel = () => setActiveId(null);

  return (
    <S.PageContainer>
      <CommonHeader title="2단계: 산화공정" />
      <CommonDescription text={"각 키워드에 맞는 단위를 맞춰보세요."} />

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

      <Modal
        open={openComplete}
        onClose={() => setOpenComplete(false)}
        title="산화공정 단계 완료!"
        description="다음 단계인 포토리소그래피로 넘어가시겠습니까?"
        cancelText="나가기"
        confirmText="다음 단계"
        onCancel={() => { setOpenComplete(false); navigate(-1); }}
        onConfirm={() => { setOpenComplete(false); navigate("/detail/step3"); }}
        disableBackdropClose
      />
    </S.PageContainer>
  );
};

export default Step2Page;
