import { instance } from "./instance";
//체험단계
export const getUserHomeInfo = async () => {
  try {
    const res = await instance.get("/stage/userStage");
    console.log(res);
    return res.data?.data ?? null;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
//마이페이지
export const getUserQuizScores = async () => {
  try {
    const res = await instance.get("/quiz/count");
    console.log(res);
    return res.data?.data ?? null;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
//퀴즈갱신
export const postQuizScore = async (quizCount) => {
  try {
    const res = await instance.post(`/quiz/count/${quizCount}`);
    console.log("postQuizScore:", res);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
//stage 단계 증가
export const postStageUp = async (nextStageNumber) => {
  try {
    const res = await instance.post(`/stage/move/${nextStageNumber}`);
    console.log(res);
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
