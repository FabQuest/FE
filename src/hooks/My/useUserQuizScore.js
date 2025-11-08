import { getUserQuizScores } from "@apis/user";
import { useState, useEffect } from "react";
export const useUserQuizScore = () => {
  const [QuizScore, setQuizScore] = useState(null);

  const fetchUserInfo = async () => {
    try {
      const res = await getUserQuizScores();
      console.log("res:", res);
      setQuizScore(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return { QuizScore };
};
