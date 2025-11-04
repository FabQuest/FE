import { getUserHomeInfo } from "@apis/user";
import { useState, useEffect } from "react";

export const useHomeUserInfo = () => {
  const [UserData, setUserData] = useState(null);

  useEffect(() => {
    const token = Cookies.get("access_token");
    if (!token) return;
    (async () => {
      try {
        const data = await getUserHomeInfo();
        setUserData(data);
      } catch (e) {
        console.log(e);
        setUserData(null);
      }
    })();
  }, []);

  return { UserData };
};
