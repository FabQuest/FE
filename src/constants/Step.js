import Active1 from "@assets/images/steps/ActiveStep1.png";
import Active2 from "@assets/images/steps/ActiveStep2.png";
import Active3 from "@assets/images/steps/ActiveStep3.png";
import Active4 from "@assets/images/steps/ActiveStep4.png";
import Active5 from "@assets/images/steps/ActiveStep5.png";
import Active6 from "@assets/images/steps/ActiveStep6.png";
import Active7 from "@assets/images/steps/ActiveStep7.png";
import Active8 from "@assets/images/steps/ActiveStep8.png";
import inActive1 from "@assets/images/steps/inActiveStep1.png";
import inActive2 from "@assets/images/steps/inActiveStep2.png";
import inActive3 from "@assets/images/steps/inActiveStep3.png";
import inActive4 from "@assets/images/steps/inActiveStep4.png";
import inActive5 from "@assets/images/steps/inActiveStep5.png";
import inActive6 from "@assets/images/steps/inActiveStep6.png";
import inActive7 from "@assets/images/steps/inActiveStep7.png";
import inActive8 from "@assets/images/steps/inActiveStep8.png";

export const STEPS = [
  { id: 1, left: 60, top: 15, activeimg: Active1, inactiveimg: inActive1 },
  { id: 2, left: 80, top: 20, activeimg: Active2, inactiveimg: inActive2 },
  { id: 3, left: 70, top: 29, activeimg: Active3, inactiveimg: inActive3 },
  { id: 4, left: 50, top: 35, activeimg: Active4, inactiveimg: inActive4 },
  { id: 5, left: 30, top: 40, activeimg: Active5, inactiveimg: inActive5 },
  { id: 6, left: 20, top: 49, activeimg: Active6, inactiveimg: inActive6 },
  { id: 7, left: 40, top: 55, activeimg: Active7, inactiveimg: inActive7 },
  { id: 8, left: 64, top: 60, activeimg: Active8, inactiveimg: inActive8 },
];

export const EXPLAINS = [
  {
    step: 1,
    explainName: "웨이퍼 제조",
    explainText: "잉곳을 잘라서 웨이퍼를 만들고 평탄하게 제조하는 단계",
  },
  {
    step: 2,
    explainName: "산화 과정",
    explainText: "웨이퍼 표면에 산화막을 형성해 전기적 절연층을 만드는 단계",
  },
  {
    step: 3,
    explainName: "포토리소그래피",
    explainText: "회로 패턴을 노광장비로 전사하는 단계",
  },
  {
    step: 4,
    explainName: "에칭 과정",
    explainText: "형성된 패턴 외곽을 식각하여 회로 모양을 조각하는 단계",
  },
  {
    step: 5,
    explainName: "이온 주입과 증착",
    explainText:
      "박막 증착을 통해 도전체 또는 절연체를 증착하고, 불순물 이온을 주입해 도핑하는 단계",
  },
  {
    step: 6,
    explainName: "금속 배선 증착",
    explainText:
      "알루미늄, 구리 등을 이용해 회로에 전류를 흐르게 하는 배선을 형성하는 단계",
  },
  {
    step: 7,
    explainName: "EDS",
    explainText: "웨이퍼의 각 칩이 정상적으로 동작하는지 검사하는 단계",
  },
  {
    step: 8,
    explainName: "패키징",
    explainText:
      "웨이퍼를 개별 칩으로 분할하고, 외부단자와 연결하여 포장하는 단계",
  },
];
