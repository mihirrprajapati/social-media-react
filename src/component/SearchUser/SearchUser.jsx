import { useContext } from "react";
import SingleSearchUser from "../SingleSearchUser/SingleSearchUser";
import { MyContext } from "../../context/ContextProvider";
import "./SearchUser.css";

const SearchUser = () => {
  const { dataArr } = useContext(MyContext);

  return (
    <>
      <div className="container">
        <div className="row d-flex justify-content-center my-4">
          <input
            type="text"
            className="w-75 fs-5 p-3 rounded-4"
            autoComplete="off"
            placeholder="search user..."
          />
        </div>
        <div className="row mx-5 user-box">
          {dataArr.map((user, key) => {
            return (
              <div className="col-6" key={key}>
                <SingleSearchUser
                  userName={user.userName}
                  userImg={user.userImg}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default SearchUser;
