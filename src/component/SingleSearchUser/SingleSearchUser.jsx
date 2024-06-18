import { FaUserPlus } from "react-icons/fa6";
import "./SingleSearchUser.css";

const SingleSearchUser = ({ userName, userImg }) => {
  return (
    <>
      <div className="single-search-user-box rounded-4 my-3 p-3 d-flex align-items-center position-relative">
        <img
          src={userImg}
          alt=""
          width="80px"
          height="80px"
          className="rounded-circle me-3 single-user-img"
        />
        <div className="text-white fs-4">{userName}</div>
        <div className="position-absolute add-user">
          <FaUserPlus className="text-white fs-4 cursor-pointer" />
        </div>
      </div>
    </>
  );
};

export default SingleSearchUser;
