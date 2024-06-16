import { useContext, useEffect, useState } from "react";
import { MyContext } from "../context/ContextProvider";

const SingleUser = ({ userId }) => {
  const [userDetails, setUserDetails] = useState([]);
  const { dataArr } = useContext(MyContext);

  useEffect(() => {
    const user = dataArr.filter((val) => val.userId === userId);
    setUserDetails(...user);
  }, [userDetails]);

  return (
    <>
      <div className="my-4 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src={userDetails.userImg && userDetails.userImg}
            alt=""
            width="50px"
            height="50px"
            className="rounded-circle me-3 single-user-img"
          />
          <div className="fw-500">
            {userDetails.userName && userDetails.userName}
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleUser;
