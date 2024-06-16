import { CiLogout } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";
import Cookies from "js-cookie";
import "./UserDetails.css";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { MyContext } from "../../context/ContextProvider";

const UserDetails = () => {
  const { currentUserData } = useContext(MyContext);

  const navigate = useNavigate();

  const logout = () => {
    Cookies.remove("userToken");
    navigate("/login");
  };

  return (
    <>
      {currentUserData && (
        <div className="mt-5">
          <div className="d-flex align-items-center flex-column">
            <img
              src={currentUserData.userImg}
              alt=""
              width="120px"
              height="120px"
              className="rounded-circle user-img"
            />
            <div className="fw-500 mt-2">{currentUserData.userName}</div>
          </div>

          <div className="mt-3 d-flex justify-content-center">
            <div className="d-flex flex-column align-items-center">
              <div>{currentUserData.posts && currentUserData.posts.length}</div>
              <div>Post</div>
            </div>
            <div className="ms-5 d-flex flex-column align-items-center">
              <div>
                {currentUserData.friendsId && currentUserData.friendsId.length}
              </div>
              <div>Friends</div>
            </div>
          </div>

          <hr />
          <div className="mt-3">
            <div className="d-flex align-items-center justify-content-center mt-2">
              <IoSettingsOutline className="fs-5" />
              <span className="fs-6 ms-2">Setting</span>
            </div>
            <div className="d-flex align-items-center justify-content-center mt-2">
              <FaUserFriends className="fs-5" />
              <span className="fs-6 ms-2">Friends</span>
            </div>
            <hr />
            <div
              className="d-flex align-items-center justify-content-center mt-2 cursor-pointer"
              onClick={logout}
            >
              <CiLogout className="fs-5" />
              <span className="fs-6 ms-2">Logout</span>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default UserDetails;
