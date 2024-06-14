import Header from "./Header";
import Post from "./Post";
import SideBar from "./SideBar";
import UserDetails from "./UserDetails/UserDetails";

const Home = () => {
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
                  <Header />
                </div>
                <div style={{ height: "90vh" }}>
                  <Post />
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
