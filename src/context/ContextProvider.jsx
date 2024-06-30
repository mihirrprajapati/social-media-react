import { createContext, useEffect, useState } from "react";
import Cookies from "js-cookie";

export const MyContext = createContext();

const ContextProvider = ({ children }) => {
  const [dataArr, setDataArr] = useState();
  const [currentUserId, setCurrentUserId] = useState();
  const [currentUserData, setCurrentUserData] = useState([]);

  const fetchData = async () => {
    try {
      const response = await fetch("http://localhost:8000/all");
      if (!response.ok) {
        throw new Error("Network response was not ok");
      }
      const jsonData = await response.json();
      setDataArr(jsonData);
    } catch (error) {
      console.error("Error fetching data: ", error);
    }
  };

  useEffect(() => {
    fetchData();
    const userID = parseInt(Cookies.get("user-id"));
    setCurrentUserId(userID);
  }, [currentUserId]);

  useEffect(() => {
    if (dataArr) {
      const user = dataArr.filter((user) => user.userId === currentUserId);
      setCurrentUserData(user[0]);
    }
  }, [dataArr, currentUserId]);

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
