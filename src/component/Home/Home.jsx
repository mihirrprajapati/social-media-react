import { useState } from "react";
import Header from "../Header";
import Post from "../Post";
import SideBar from "../SideBar/SideBar";
import UserDetails from "../UserDetails/UserDetails";
import SearchUser from "../SearchUser/SearchUser";
import UserAccount from "../UserAccount/UserAccount";
import { RxCross2 } from "react-icons/rx";
import { RxHamburgerMenu } from "react-icons/rx";

import "./Home.css";

const Home = () => {
  const [currentPage, setCurrentPage] = useState("Home");
  const [sidebarVisible, setSidebarVisible] = useState(false);

  const toggleSideBar = () => {
    setSidebarVisible((val) => !val);
  };

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div
            className={`col-sm-12 col-md-2 col-lg-3 col-xl-3 side-bar-bg side-bar d-sm-block ${
              sidebarVisible && "show-sidebar"
            }`}
          >
            <div
              className={`cross-icon ${
                sidebarVisible ? "d-block d-sm-none" : "d-none"
              }`}
              onClick={toggleSideBar}
            >
              <RxCross2 className="fs-1" />
            </div>
            <SideBar />
          </div>
          <div className="col-sm-12 col-md-10 col-lg-9 col-xl-9">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-9 h-100">
                <div
                  className={`hum-burger-icon ${
                    sidebarVisible ? "d-none" : "d-block d-sm-none"
                  }`}
                  onClick={toggleSideBar}
                >
                  <RxHamburgerMenu className="fs-2 text-primary" />
                </div>
                <div>
                  <Header setCurrentPage={setCurrentPage} />
                </div>
                <div style={{ height: "90vh" }}>
                  {currentPage === "Home" && <Post />}
                  {currentPage === "Search" && <SearchUser />}
                  {currentPage === "Account" && <UserAccount />}
                </div>
              </div>
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-3 user-details">
                <UserDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
