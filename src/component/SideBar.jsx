import SingleUser from "./SingleUser";
import { useContext } from "react";
import { MyContext } from "../context/ContextProvider";

const SideBar = () => {
  const { currentUserData } = useContext(MyContext);

  return (
    <>
      <div className="d-flex flex-column flex-shrink-0 w-100 side-bar-bg vh-100 px-2">
        <div className="pt-5" style={{ height: "20%" }}>
          <div className="px-2">
            <h2 className="text-white fs-2">ULook</h2>
            <input
              type="text"
              className="mt-3 w-100 px-3 py-2 rounded-4 border-0 input-box"
              placeholder="search"
            />
          </div>
        </div>
        <div style={{ height: "80%" }}>
          <p className="ms-2 fs-4">Friends</p>
          <hr />
          <div className="mx-4 side-bar-scroll">
            {currentUserData.friendsId &&
              currentUserData.friendsId.map((val, key) => {
                return <SingleUser key={key} userId={val} />;
              })}
          </div>
        </div>
      </div>
    </>
  );
};

export default SideBar;
