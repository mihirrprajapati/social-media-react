import Header from "./component/Header";
import Post from "./component/Post";
import SideBar from "./component/SideBar";
import "./App.css";

const App = () => {
  return (
    <>
      <div className="container-fluid">
        <div className="row">
          <div className="col-3">
            <SideBar />
          </div>
          <div className="col-9">
            <Header />
            <Post />
          </div>
        </div>
      </div>
    </>
  );
};

export default App;
