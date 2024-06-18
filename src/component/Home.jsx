import { useState } from "react";
import Header from "./Header";
import Post from "./Post";
import SideBar from "./SideBar/SideBar";
import UserDetails from "./UserDetails/UserDetails";
import SearchUser from "./SearchUser/SearchUser";
import UserAccount from "./UserAccount/UserAccount";

const Home = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-sm-12 col-md-2 col-lg-3 col-xl-3 side-bar-bg d-none d-sm-block">
            <SideBar />
          </div>
          <div className="col-sm-12 col-md-10 col-lg-9 col-xl-9">
            <div className="row">
              <div className="col-sm-12 col-md-12 col-lg-12 col-xl-9 h-100">
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
