import React from "react";
import * as S from "./styled";
import HelpButton from "@assets/images/helpButton.png";

const Description = ({ text, className }) => {
  return (
    <S.Fragment>
      <S.DescriptionText className={className}>{text}</S.DescriptionText>
      <S.HelpButton src={HelpButton} alt="Help" />
    </S.Fragment>
  );
};

export default Description;
