import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "./styled";
import BackButtonImage from "@assets/icon/backbutton.png";

const Header = ({ title }) => {
  const navigate = useNavigate();

  return (
    <S.HeaderContainer>
      <S.BackButton
        src={BackButtonImage}
        alt="Back"
        onClick={() => navigate("/training")}
      />
      <S.Title>{title}</S.Title>
    </S.HeaderContainer>
  );
};

export default Header;
