export const Questions = [
  {
    id: 1,
    type: "OX",
    Question:
      "웨이퍼 제조 단계에서는 실리콘 잉곳을 절단하고 연마하여 평탄한 기판을 만든다.",
    correct: "O",
  },
  {
    id: 2,
    type: "OX",

    Question: " CCP 플라즈마 산화 공정에서 O₂ 유량의 단위는 ‘W(와트)’이다.",
    correct: "X",
  },
  {
    id: 3,
    type: "OX",

    Question:
      "포토리소그래피 단계에서 사용되는 마스크는 석영판 위에 크롬(Chromium) 금속으로 패턴을 만든다.",
    correct: "O",
  },
  {
    id: 4,
    type: "OX",

    Question:
      "포토리소그래피 공정에서 스테퍼(Stepper)는 마스크와 웨이퍼를 나노미터 단위로 정밀하게 맞추기 위해 사용된다.",
    correct: "O",
  },
  {
    id: 5,
    type: "OX",
    Question: "EDS 공정은 웨이퍼를 절단하는 과정이다.",
    correct: "X",
  },
];
export const SubjectiveQs = [
  {
    id: 1,
    type: "SUBJ",
    Question: "웨이퍼 제조 과정에서 ‘평탄화’를 하는 이유는?",
    choices: [
      " ① 반짝이게 만들기 위해",
      " ② 빛 반사를 줄이기 위해",
      " ③ 회로 패턴이 고르게 형성되도록 하기 위해",
      " ④ 절단 시간을 줄이기 위해",
    ],
    correctIndex: 2,
  },
  {
    id: 2,
    type: "SUBJ",

    Question:
      "다음 중 CCP 플라즈마 산화 공정에서 사용하는 단위가 올바르게 짝지어진 것은?",
    choices: [
      " ① RF 파워 – sccm",
      " ② O₂ 유량 – W",
      " ③ 압력 – mTorr",
      " ④ RF 파워 – Pa",
    ],
    correctIndex: 2,
  },
  {
    id: 3,
    type: "SUBJ",

    Question:
      "포토리소그래피에서 ‘포토레지스트(PR)’가 빛을 받으면 어떻게 되는가?",
    choices: [
      " ① 금속이 된다",
      " ② 화학적 성질이 변한다",
      " ③ 산화막으로 바뀐다",
      " ④ 불순물이 주입된다",
    ],
    correctIndex: 1,
  },
  {
    id: 4,
    type: "SUBJ",
    Question: "다음 중 에칭(Etching) 공정에 대한 설명으로 옳은 것은?",
    choices: [
      " ① 플라즈마를 이용해 웨이퍼 표면을 녹여서 회로를 만든다.",
      " ② PR로 덮이지 않은 부분만 깎아내어 원하는 회로 패턴을 형성한다.",
      " ③ 웨이퍼 표면에 절연막을 증착하는 과정이다.",
      " ④ 금속 배선을 형성하는 과정이다.",
    ],
    correctIndex: 1,
  },
  {
    id: 5,
    type: "SUBJ",
    Question: "패키징 공정에 대한 설명으로 옳은 것은?",
    choices: [
      " ① EDS 단계에서 바로 칩을 절단한다.",
      " ② 레이저 다이싱은 칩 손상이 많아 잘 사용하지 않는다.",
      " ③ 와이어 본딩은 패드와 기판 단자를 금속선으로 연결하는 과정이다.",
      " ④ 몰딩 과정에서는 질소 가스를 흘려 칩을 보호한다.",
    ],
    correctIndex: 2,
  },
];
export const CombinedQuestions = [...Questions, ...SubjectiveQs].map(
  (q, i) => ({ ...q, seq: i + 1 })
);
