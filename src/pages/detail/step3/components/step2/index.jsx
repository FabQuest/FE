import React, { useState, useEffect } from "react";
import * as S from "./styled";

// Import assets
import light_off from "../../assets/light_off.png";
import light_on from "../../assets/light_on.png";
import mask1 from "../../assets/mask1.png";
import mask2 from "../../assets/mask2.png";
import mask3 from "../../assets/mask3.png";
import wafer from "../../assets/wafer.png";

const maskImages = {
  mask1: mask1,
  mask2: mask2,
  mask3: mask3,
};

const Step2Component = ({ selectedMask, onLightsAllOn }) => {
  const [lightsOn, setLightsOn] = useState([false, false, false, false]);

  const toggleLight = (index) => {
    setLightsOn((prev) => {
      const newLightsOn = [...prev];
      newLightsOn[index] = !newLightsOn[index];
      return newLightsOn;
    });
  };

  useEffect(() => {
    const allOn = lightsOn.every((light) => light);
    onLightsAllOn(allOn);
  }, [lightsOn, onLightsAllOn]);

  return (
    <S.Step2Container>
      <S.LightContainer>
        {lightsOn.map((isOn, index) => (
          <S.LightImage
            key={index}
            src={isOn ? light_on : light_off}
            alt={`Light ${index + 1}`}
            onClick={() => toggleLight(index)}
          />
        ))}
      </S.LightContainer>
      {selectedMask && (
        <S.MaskImage src={maskImages[selectedMask]} alt="Selected Mask" />
      )}
      <S.WaferImage src={wafer} alt="Wafer" />
    </S.Step2Container>
  );
};

export default Step2Component;
