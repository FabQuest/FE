import React from "react";
import * as S from "./styled";
import HelpButton from "@assets/images/helpButton.png";

const Description = ({ text, subText, className }) => {
  return (
    <S.Fragment>
      <S.DescriptionText className={className}>{text}</S.DescriptionText>
      <S.SubDescriptionText className={className}>{subText}</S.SubDescriptionText>
      <S.HelpButton src={HelpButton} alt="Help" />
    </S.Fragment>
  );
};

export default Description;
