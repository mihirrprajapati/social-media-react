import Header from "./component/Header";
import Post from "./component/Post";
import SideBar from "./component/SideBar";
import "./App.css";
import UserDetails from "./component/UserDetails";
import LoginSignupPage from "./component/LoginSignUpPage";

const App = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3 side-bar-bg">
            <SideBar />
          </div>
          <div className="col-9">
            <Header />
            <div className="row">
              <div
                className="col-9"
                style={{ maxHeight: "calc(100vh - 100px)", overflowY: "auto" }}
              >
                <Post />
              </div>
              <div className="col-3">
                <UserDetails />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* <LoginSignupPage /> */}
    </>
  );
};

export default App;
