import { createContext, useEffect, useState } from "react";
import { userData } from "../data/userData";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [dataArr, setDataArr] = useState(userData);
  const [currentUserId, setCurrentUserId] = useState(105);
  const [currentUserData, setCurrentUserData] = useState([]);

  useEffect(() => {
    const user = dataArr.filter((user) => user.userId === currentUserId);
    setCurrentUserData(user[0]);
  }, [currentUserData, currentUserId]);

  return (
    <MyContext.Provider
      value={{
        dataArr,
        setDataArr,
        currentUserId,
        setCurrentUserId,
        currentUserData,
      }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
