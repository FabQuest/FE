export const STEP_CONTENT = {
  1: {
    title: "1단계: 웨이퍼 제조",
    description: "절취선을 터치하여 \n실리콘 잉곳을 웨이퍼로 만들어보세요.",
    helpText: "1단계인 웨이퍼 제조 단계에서는 실리콘 잉곳을 원통 모양으로 성장시킨 뒤 얇게 절단하여 웨이퍼를 만들고, 표면을 연마해 매끄럽고 균일한 기판을 확보해요. ",
    modal: {
      title: "웨이퍼 제조 단계 완료!",
      description: "다음 단계인 산화공정으로 넘어가시겠습니까?",
      confirmText: "다음 단계",
      cancelText: "나가기",
    },
  },
  2: {
    title: "2단계: 산화공정",
    description: "각 키워드에 맞는 단위를 맞춰보세요.",
    helpText: 
      "CCP(용량성 결합 플라즈마) 공정을 활용하여 웨이퍼 표면에 산화막을 형성할 수 있어요. 이 산화막은 전기적 절연층 역할을 하며, 이후 회로 제작에서 중요한 기반이 돼요. \n\nRF 파워 \n플라즈마를 유지하기 위해 인가되는 고주파 전력이에요. 단위는 ‘W(와트)’로, 높을수록 플라즈마 에너지가 강해져요. \n\nO₂ 유량 \n챔버로 주입되는 산소 가스의 양이에요. 단위는 sccm (standard cubic centimeter per minute) 으로, 분당 표준상태에서 몇 cm³의 가스가 흐르는지를 의미해요. \n\n압력 \n챔버 내부 가스의 밀도를 나타내요. 주로 mTorr(밀리토르) 또는 ‘Pa(파스칼)’로 표시되며, 낮을수록 희박한 분위기에요. ",
    modal: {
      title: "산화공정 단계 완료!",
      description: "다음 단계인 포토리소그래피로 넘어가시겠습니까?",
      confirmText: "다음 단계",
      cancelText: "나가기",
    },
  },
  3: {
    title: "3단계: 포토리소그래피",
    description: (
      currentSubStep, 
    ) => {
      if (currentSubStep === 1) return "원하는 마스크를 선택해 주세요.";
      if (currentSubStep === 2) return "손전등을 클릭하여 웨이퍼에 \n마스크 모양대로 문양을 남겨봅시다.";
      return "빛을 맞은 부분이 약해졌어요. \n현상액을 부어 그 부분만 씻어내고 \n패턴을 남겨봅시다.";
    },
    subDescription: (
      currentSubStep,
    ) => {
      if (currentSubStep === 2) return "* 마스크는 빛을 차단하는 방어막 역할을 합니다. \n마스크 모양대로 원하는 곳에 빛을 노출시킬 수 있어요.";
      return "";
    },
    helpText: (
      currentSubStep,
    ) => {
      if (currentSubStep === 1) return "MASK는 석영 판 위에 크롬(Chromium)이라는 금속을 사용해 회로 패턴을 새겨 만들어요.";
      if (currentSubStep === 2) return "미세 패턴이 새겨진 마스크를 웨이퍼 위에 맞춰서 정밀하게 위치시켜요. \n10nm 이하 오차로 맞추기 때문에 스테퍼(Stepper)라는 초정밀 장비를 사용해요.";
      return "포토레지스트(PR)는 빛을 받으면 화학적 성질이 바뀌어요. \n현상액은 이 변형된 부분만 녹여 제거하여, 마스크 모양 그대로 회로 패턴을 만들어요.";
    },
    modal: {
      title: "포토리소그래피 단계 완료!",
      description: "다음 단계인 식각공정으로 넘어가시겠습니까?",
      confirmText: "다음 단계",
      cancelText: "나가기",
    },
  },
  4: {
    title: "4단계: 식각공정",
    description: "플라즈마 빔을 이동시켜 Lithography 후 \nPR로 덮여있지 않는 부분을 없애봅시다.",
    subDescription: "* 지나간 곳은 다시 지나지 않고 \n모든 길을 한번에 지나가 PR층을 없애보세요.",
    helpText: "etching은 건식과 습식 방법이 있습니다. 요즘 공정은 대부분 건식 etching인 플라즈마 etching을 사용해요. \n강한 가스 플라즈마를 이용해, PR로 덮이지 않은 부분만 깎아내여 보호된 부분은 남고, 빈 부분만 파여서 회로 모양이 웨이퍼에 새겨져요.",
    modal: {
      title: "식각공정 단계 완료!",
      description: "모든 선분을 한 번씩만 통과했습니다. 다음 단계로 넘어갈까요?",
      confirmText: "다음 단계",
      cancelText: "나가기",
    },
  },
  5: {
    title: "5단계: 이온 주입 & 증착",
    description: (
      phase,
    ) => {
      if (phase === "measure") return "시작하기 버튼을 눌러 박막 증착을 시작하고, \n목표 범위 내에서 STOP을 눌러보세요.";
      return "각도 조절 슬라이더 바를 조절하여 \n위치를 맞춘 후 fire 버튼을 눌러 \n이온을 주입해 봅시다.";
    },
    helpText: "CVD, PVD 등의 방법으로 금속이나 절연체 물질을 얇게 증착해요. \n이 과정을 통해 회로 형성에 필요한 전극, 배선, 보호막 층이 구현돼요. ",
    modal: {
      title: "이온 주입 & 증착 단계 완료!",
      description: "다음 단계인 금속 배선으로 넘어가시겠습니까?",
      confirmText: "다음 단계",
      cancelText: "나가기",
    },
  },
  6: {
    title: "6단계: 금속 배선",
    description: "배선 상자에 있는 배선 조각을 적절한 위치에 \n드래그 하여 배선을 완성해 봅시다.",
    helpText: "MOSFET에 배선을 연결 할 때 배선은 Contact이라고 하고, 배선층과 배선층을 잇는 것은 Via(비아)라고 해요.",
    modal: {
      title: "금속 배선 단계 완료!",
      description: "다음 단계인 EDS로 넘어가시겠습니까?",
      confirmText: "다음 단계",
      cancelText: "나가기",
    },
  },
  7: {
    title: "7단계: EDS",
    description: (
      view,
    ) => {
      if (view === "wafer") return "빨간색으로 표시된 다이를 눌러 \n불량 여부를 전부 선별해 봅시다.";
      return "예시 범위를 참고하여\n불량 여부를 체크해봅시다.";
    },
    helpText: "완성된 웨이퍼의 각 다이에 전기 신호를 인가해 정상 동작 여부를 검사해요. 측정값과 기준을 비교해 불량 칩을 선별하고, 수율을 산출하는 단계에요.",
    modal: {
      title: "EDS 단계 완료!",
      description: "다음 단계로 넘어가시겠습니까?",
      confirmText: "다음 단계",
      cancelText: "나가기",
    },
  },
  8: {
    title: "8단계: 패키징",
    description: (
      phase,
    ) => {
      if (phase === "cut") return "자르기 버튼을 클릭하여 \n각 절취선에 맞게 웨이퍼를 잘라 봅시다.";
      if (phase === "wire") return "같은 색을 가진 다이(die)와 외부 단자를\n클릭하여 와이어를 형성해 봅시다.";
      return "비커 아이콘을 클릭하여 \n와이어와 칩을 고정시켜 봅시다.";
    },
    helpText: (phase) => {
      if (phase === "cut") return "레이저 다이싱(Laser Dicing) \n웨이퍼 내부에 레이저로 미세 크랙을 만들어 절단하는 방식이에요. \n다이아몬드 톱으로 자르는 방식보다 칩 손상이 적고, 간격(다이싱 스트리트)도 좁게 할 수 있어요. \n다만, Burr라고 불리는 미세 찌꺼기가 생기면 표면이 거칠어지고 후공정(와이어 본딩·몰딩)에서 불량이 생길 수 있어 철저히 세정해야 해요.";
      if (phase === "wire") return "와이어 본딩(Wire bonding) \n칩 위에는 패드(Pad)라고 불리는 작은 금속 접점이 있어요. \n와이어 본딩은 이 패드와 기판의 단자를 가느다란 금속선(알루미늄)으로 연결하는 과정이에요.";
      return "몰딩(Molding) \n칩과 와이어를 보호하기 위해 Epoxy Mold Compound(EMC)라는 에폭시 수지를 고온·고압으로 흘려 보내 칩을 감싸요. \n이 방식은 Transfer Molding이라 불러요. 또한 몰딩 후 Moisture Sensitivity Level (MSL)을 검사해 습기에 견디는 정도를 평가해요.";
    },
  },
};
