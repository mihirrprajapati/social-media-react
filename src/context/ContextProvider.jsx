import { createContext, useEffect, useState } from "react";
import { userData } from "../data/userData";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [dataArr, setDataArr] = useState(userData);
  const [currentUserId, setCurrentUserId] = useState(104);
  const [currentUserData, setCurrentUserData] = useState([]);

  useEffect(() => {
    const user = dataArr.filter((user) => user.userId === currentUserId);
    setCurrentUserData(user[0]);
  }, [currentUserData]);

  return (
    <MyContext.Provider
      value={{ dataArr, setDataArr, currentUserId, currentUserData }}
    >
      {children}
    </MyContext.Provider>
  );
};

export default ContextProvider;
