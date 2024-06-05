import { FiHome } from "react-icons/fi";
import { AiOutlineMessage } from "react-icons/ai";
import { IoSettingsOutline } from "react-icons/io5";

const Header = () => {
  return (
    <>
      <header className="p-3 mb-3 w-100">
        <div className="container">
          <div className="row">
            <div className="col-10 d-flex justify-content-center">
              <div className="d-flex header-bg p-3 rounded-4">
                <div>
                  <FiHome className="fs-4 mx-3" />
                </div>
                <div>
                  <AiOutlineMessage className="fs-4 mx-3" />
                </div>
                <div>
                  <IoSettingsOutline className="fs-4 mx-3" />
                </div>
              </div>
            </div>

            <div className="col-2 dropdown text-end d-flex align-items-center justify-content-end">
              <a
                href="#"
                className="d-block link-body-emphasis text-decoration-none dropdown-toggle"
                data-bs-toggle="dropdown"
                aria-expanded="false"
              >
                <img
                  src="https://github.com/mdo.png"
                  alt="mdo"
                  width={32}
                  height={32}
                  className="rounded-circle"
                />
              </a>
              <ul className="dropdown-menu text-small">
                <li>
                  <a className="dropdown-item" href="#">
                    New project...
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Settings
                  </a>
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Profile
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <li>
                  <a className="dropdown-item" href="#">
                    Sign out
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-between"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
