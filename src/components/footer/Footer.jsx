import * as S from "./styled";
import TrainingIcon from "@assets/images/trainingPageIcon.png";
import HomeIcon from "@assets/images/HomepageIcon.png";
import MypageIcon from "@assets/images/mypageIcon.png";
import { useLocation, useNavigate } from "react-router-dom";

export const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const items = [
    { key: "training", label: "체험하기", to: "/training", icon: TrainingIcon },
    { key: "home", label: "홈", to: "/home", icon: HomeIcon },
    { key: "mypage", label: "마이페이지", to: "/mypage", icon: MypageIcon },
  ];
  const active =
    location.pathname === "/home"
      ? "home"
      : items.find((i) => location.pathname.startsWith(i.to))?.key ?? "home";

  return (
    <S.FooterContainer>
      {items.map((item) => (
        <S.TabWrapper
          key={item.key}
          $active={active === item.key}
          onClick={() => navigate(item.to)}
        >
          <S.TabImg src={item.icon} alt={item.label} />
          <S.TabText $active={active === item.key}>{item.label}</S.TabText>
        </S.TabWrapper>
      ))}
    </S.FooterContainer>
  );
};
