import { getUserHomeInfo } from "@apis/user";
import { useState, useEffect } from "react";
export const useHomeUserInfo = () => {
  const [UserData, setUserData] = useState(null);

  const fetchUserInfo = async () => {
    try {
      const res = await getUserHomeInfo();
      console.log("res:", res);
      setUserData(res);
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    fetchUserInfo();
  }, []);

  return { UserData };
};
