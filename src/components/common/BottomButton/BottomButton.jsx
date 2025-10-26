import React from "react";
import * as S from "./styled";

const BottomButton = ({ onClick, disabled, text, visible }) => {
  return (
    <S.BottomBar $visible={visible}>
      <S.NextButton
        type="button"
        disabled={disabled}
        onClick={onClick}
      >
        {text}
      </S.NextButton>
    </S.BottomBar>
  );
};

export default BottomButton;
