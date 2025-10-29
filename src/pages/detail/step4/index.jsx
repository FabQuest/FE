import React from "react";
import { useNavigate } from "react-router-dom";
import CommonHeader from "@components/common/Header/Header";
import CommonDescription from "@components/common/Description/Description";
import Modal from "@components/common/Modal/Modal";
import * as S from "./styled";
import { useGraphGame } from "./hooks/useGraphGame";
import GraphVisualization from "./components/GraphVisualization";

const Step4Page = () => {
  const navigate = useNavigate();
  const {
    nodePos,
    colorNode,
    colorEdge,
    visitedEdges,
    isDragging,
    dragFrom,
    dragTo,
    currentNode,
    handleNodePointerDown,
    svgRef,
    handleSvgPointerMove,
    handleSvgPointerUp,
    failed,
    showModal,
    handleModalClose,
    handleModalConfirm,
  } = useGraphGame(navigate);

  return (
    <S.PageContainer>
      <CommonHeader title="4단계: 식각공정" />
      <CommonDescription
        text={"플라즈마 빔을 이동시켜 Lithography 후 \nPR로 덮여있지 않는 부분을 없애봅시다."}
        subText={
          "* 지나간 곳은 다시 지나지 않고 \n모든 길을 한번에 지나가 PR층을 없애보세요."
        }
      />

      <GraphVisualization
        nodePos={nodePos}
        colorNode={colorNode}
        colorEdge={colorEdge}
        visitedEdges={visitedEdges}
        isDragging={isDragging}
        dragFrom={dragFrom}
        dragTo={dragTo}
        currentNode={currentNode}
        handleNodePointerDown={handleNodePointerDown}
        svgRef={svgRef}
        handleSvgPointerMove={handleSvgPointerMove}
        handleSvgPointerUp={handleSvgPointerUp}
        failed={failed}
      />

      <Modal
        open={showModal}
        onClose={handleModalClose}
        onConfirm={handleModalConfirm}
        title="식각공정 단계 완료!"
        description="모든 선분을 한 번씩만 통과했습니다. 다음 단계로 넘어갈까요?"
        confirmText="다음 단계"
        cancelText="나가기"
      />
    </S.PageContainer>
  );
};

export default Step4Page;
