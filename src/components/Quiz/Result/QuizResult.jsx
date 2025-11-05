import * as S from "./styled";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import BackIcon from "@assets/icon/backbutton.png";
import HappyImg from "@assets/images/QuizResultHappyImg.png";
import SadImg from "@assets/images/QuizResultSadImg.png";

import { GradationBtn } from "@components/training/GradationBtn";
import { postQuizScore } from "@apis/user";
export const QuizResult = ({ results, onRetry }) => {
  const [submitting, setSubmitting] = useState(false);
  const navigate = useNavigate();
  const list = Object.values(results);
  console.log("결과:", results);
  const correct = list.filter((r) => r.isCorrect).length;
  const UserLevel =
    correct < 3
      ? ""
      : correct < 6
      ? "공정 초보자"
      : correct < 9
      ? "공정 견습생"
      : "공정 마스터";
  const isSuccess = correct < 3 ? false : true;

  const handleMyPage = async () => {
    if (submitting) return;
    try {
      setSubmitting(true);
      await postQuizScore(correct);
      navigate("/mypage");
    } catch (err) {
      console.log(err);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <S.Container>
      <S.TitleBox>
        퀴즈 풀기
        <S.BackIcon src={BackIcon} />
      </S.TitleBox>
      <S.StateResultWrapper>
        <S.LevelBox>
          <S.CongratulationText>
            {isSuccess ? "축하합니다! 🎉" : "아쉬워요 ㅠㅠ"}
          </S.CongratulationText>
          <S.UserLevel>
            {isSuccess ? (
              <>
                {" "}
                당신은
                <span>{UserLevel}</span>
                입니다.
              </>
            ) : (
              "다시 한 번 도전해 볼까요?"
            )}
          </S.UserLevel>
        </S.LevelBox>
        <S.QuizResultImg src={isSuccess ? HappyImg : SadImg} />
        <S.QuizScore>
          <span>{correct}</span>/10 점
        </S.QuizScore>
      </S.StateResultWrapper>
      <S.ResultWrapper>
        {list.map((r, i) => (
          <S.AnswerBox
            key={r.seq ?? r.displayNo ?? i}
            $isCorrect={!!r.isCorrect}
          >
            {String(r.selected)}/{String(r.correct)}/{r.explanation ?? ""}
          </S.AnswerBox>
        ))}
      </S.ResultWrapper>
      <S.BtnWrapper>
        <GradationBtn
          width={"173"}
          text={isSuccess ? "뱃지 보러 가기" : "다시 풀기"}
          isMy={true}
          onAction={isSuccess ? handleMyPage : onRetry}
        />
      </S.BtnWrapper>
    </S.Container>
  );
};
