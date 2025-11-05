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
