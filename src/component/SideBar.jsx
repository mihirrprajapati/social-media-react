import { SlSocialBehance } from "react-icons/sl";
import SingleUser from "./SingleUser";

const SideBar = () => {
  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 p-3 bg-body-tertiary w-100 side-bar-bg vh-100">
        <a
          href="/"
          className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none"
        >
          <svg className="bi pe-none me-2" width={40} height={32}>
            <use xlinkHref="#bootstrap" />
          </svg>
          <span className="fs-4">
            <SlSocialBehance />
            <input
              type="text"
              className="w-75 ms-3 px-3 py-2 rounded-4 border-0 input-box"
              placeholder="search"
            />
          </span>
        </a>
        <div className="mx-2 mt-5">
          <p>Friends</p>
          <ul className="nav nav-pills flex-column mb-auto">
            <li className="nav-item">
              <SingleUser />
            </li>
            <li className="nav-item">
              <SingleUser />
            </li>
            <li className="nav-item">
              <SingleUser />
            </li>
            <li className="nav-item">
              <SingleUser />
            </li>
            <li className="nav-item">
              <SingleUser />
            </li>
          </ul>
        </div>
      </div>
    </>
  );
};

export default SideBar;
