import { CiLogout } from "react-icons/ci";
import { IoSettingsOutline } from "react-icons/io5";
import { FaUserFriends } from "react-icons/fa";

const UserDetails = () => {
  return (
    <>
      <div>
        <div className="d-flex align-items-center flex-column">
          <img
            src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_1280.jpg"
            alt=""
            width="120px"
            height="120px"
            className="rounded-circle"
          />
          <div className="fw-500 mt-2">Alice fdffdgfdg</div>
        </div>

        <div className="mt-3 d-flex justify-content-center">
          <div className="d-flex flex-column align-items-center">
            <div>5</div>
            <div>Post</div>
          </div>
          <div className="ms-5 d-flex flex-column align-items-center">
            <div>215</div>
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
          <div className="d-flex align-items-center justify-content-center mt-2">
            <CiLogout className="fs-5" />
            <span className="fs-6 ms-2">Logout</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default UserDetails;
