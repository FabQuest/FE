import { instance } from "./instance";

export const getUserHomeInfo = async () => {
  try {
    const res = await instance.get("/stage/userStage");
    return res.data;
  } catch (err) {
    console.log(err);
    throw err;
  }
};
