import React from "react";
import * as S from "./styled";
import { useGraphGame } from "./hooks/useGraphGame";
import GraphVisualization from "./components/GraphVisualization";
import StepLayout from "@components/layout/StepLayout/StepLayout";
import { STEP_CONTENT } from "@constants/stepContent";
import StepCompletionModal from "@components/common/Modal/StepCompletionModal";

const Step4Page = () => {
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
  } = useGraphGame();

  const content = STEP_CONTENT[4];

  const modalProps = {
    open: showModal,
    onClose: handleModalClose,
    stepNumber: 4,
    modalContent: content.modal,
  };

  return (
    <StepLayout
      title={content.title}
      description={content.description}
      subDescription={content.subDescription}
      helpText={content.helpText}
      ModalComponent={StepCompletionModal}
      modalProps={modalProps}
    >
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
    </StepLayout>
  );
};

export default Step4Page;
