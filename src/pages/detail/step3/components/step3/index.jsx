import React, { useState } from 'react';
import * as S from './styled';

import cylinder from "../../assets/cylinder.png";
import wafer2 from "../../assets/wafer2.png";
import wafer3 from "../../assets/wafer3.png";
import click from "../../assets/click.png";

const Step3Component = ({ onComplete }) => {
  const [isCylinderRotated, setIsCylinderRotated] = useState(false);
  const [currentWafer, setCurrentWafer] = useState(wafer2);
  const [isClickVisible, setIsClickVisible] = useState(true);

  const handleCylinderClick = () => {
    if (!isCylinderRotated) {
      setIsCylinderRotated(true);
      setCurrentWafer(wafer3);
      setIsClickVisible(false);
      onComplete();
    }
  };

  return (
    <S.Step3Container>
      <S.ClickableContainer onClick={handleCylinderClick}>
        <S.CylinderImage 
          src={cylinder} 
          alt="Cylinder" 
          $isRotated={isCylinderRotated}
        />
        {isClickVisible && <S.ClickImage src={click} alt="Click here" />}
      </S.ClickableContainer>
      <S.WaferImage src={currentWafer} alt="Wafer" />
    </S.Step3Container>
  );
};

export default Step3Component;
