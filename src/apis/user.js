import { instance } from "./instance";
//체험단계
export const getUserHomeInfo = async () => {
  try {
    const res = await instance.get("/stage/userStage");
    return res.data?.data ?? null;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
