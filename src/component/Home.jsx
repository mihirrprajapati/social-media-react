import { useState } from "react";
import Header from "./Header";
import Post from "./Post";
import SideBar from "./SideBar";
import UserDetails from "./UserDetails/UserDetails";
import SearchUser from "./SearchUser/SearchUser";
import UserAccount from "./UserAccount/UserAccount";

const Home = () => {
  const [currentPage, setCurrentPage] = useState("Home");

  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 side-bar-bg">
            <SideBar />
          </div>
          <div className="col-9">
            <div className="row">
              <div className="col-9 h-100">
                <div style={{ height: "10vh" }}>
                  <Header setCurrentPage={setCurrentPage} />
                </div>
                <div style={{ height: "90vh" }}>
                  {currentPage === "Home" && <Post />}
                  {currentPage === "Search" && <SearchUser />}
                  {currentPage === "Account" && <UserAccount />}
                </div>
              </div>
              <div className="col-3 user-details">
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
