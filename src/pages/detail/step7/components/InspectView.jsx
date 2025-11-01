import React from "react";
import * as S from "../styled";
import nemo from "../assets/nemo.png";
import { V_MIN, V_MAX, I_MIN, I_MAX } from "../constants";

export default function InspectView({ selectedDie, onChoose }) {
  return (
    <>
      <S.InspectArea>
        <S.ChipPreview src={nemo} alt="chip" />
        <S.ReadingBox>
          <S.ReadingRow>
            <S.ReadingLabel>전압</S.ReadingLabel>
            <S.ReadingValue>{selectedDie.voltage.toFixed(2)} V</S.ReadingValue>
          </S.ReadingRow>
          <S.ReadingRow>
            <S.ReadingLabel>전류</S.ReadingLabel>
            <S.ReadingValue>{selectedDie.current.toFixed(1)} µA</S.ReadingValue>
          </S.ReadingRow>
        </S.ReadingBox>

        <S.SpecBox>
          <S.SpecTitle>동작 전압(VDD) 범위</S.SpecTitle>
          <S.SpecText>정상: {V_MIN}V ~ {V_MAX}V</S.SpecText>
          <S.SpecText>불량: {V_MIN}V 미만 또는 {V_MAX}V 초과</S.SpecText>

          <S.SpecDivider />

          <S.SpecTitle>누설 전류</S.SpecTitle>
          <S.SpecText>정상: {I_MIN} µA ~ {I_MAX} µA</S.SpecText>
          <S.SpecText>불량: {I_MAX} µA 초과</S.SpecText>
        </S.SpecBox>

        <S.QuestionArea>
          <S.Question>불량 다이인가요?</S.Question>
          <S.AnswerButtons>
            <S.AnswerBtn onClick={() => onChoose(true)}>YES</S.AnswerBtn>
            <S.AnswerBtnNegative onClick={() => onChoose(false)}>NO</S.AnswerBtnNegative>
          </S.AnswerButtons>
        </S.QuestionArea>
      </S.InspectArea>
    </>
  );
}
