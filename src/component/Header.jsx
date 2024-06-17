import { FiHome } from "react-icons/fi";
import { IoSearchSharp } from "react-icons/io5";
import { FaRegUser } from "react-icons/fa";

const Header = ({ setCurrentPage }) => {
  const changePage = (val) => {
    setCurrentPage(val);
  };

  return (
    <>
      <header className="p-3 pb-3 w-100">
        <div className="container">
          <div className="row">
            <div className="col-10 d-flex justify-content-center w-100">
              <div className="d-flex header-bg p-3 rounded-4">
                <div>
                  <FiHome
                    className="fs-4 mx-3 cursor-pointer"
                    onClick={() => changePage("Home")}
                  />
                </div>
                <div>
                  <IoSearchSharp
                    className="fs-4 mx-3 cursor-pointer"
                    onClick={() => changePage("Search")}
                  />
                </div>
                <div>
                  <FaRegUser
                    className="fs-5 mx-3 cursor-pointer"
                    onClick={() => changePage("Account")}
                  />
                </div>
              </div>
            </div>

            {/* <div className="col-2 dropdown text-end d-flex align-items-center justify-content-end">
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
            </div> */}
          </div>
          <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-between"></div>
        </div>
      </header>
    </>
  );
};

export default Header;
