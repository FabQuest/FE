import { getUserHomeInfo } from "@apis/user";
import { useState, useEffect } from "react";
import Cookies from "js-cookie";
export const useHomeUserInfo = (enabled) => {
  const [UserData, setUserData] = useState(null);

  useEffect(() => {
    (async () => {
      try {
        const data = await getUserHomeInfo();
        setUserData(data);
      } catch (e) {
        console.error(e);
        setUserData(null);
      }
    })();
  }, [enabled]);

  return { UserData };
};
