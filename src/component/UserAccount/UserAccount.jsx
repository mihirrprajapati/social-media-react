import { IoHeartOutline } from "react-icons/io5";
import "./UserAccount.css";
import { AiOutlineFire } from "react-icons/ai";
import { useContext, useState } from "react";
import { MyContext } from "../../context/ContextProvider";

const UserAccount = () => {
  const { currentUserData } = useContext(MyContext);

  const [allPosts, setAllPosts] = useState({ status: true, postId: 0 });

  return (
    <>
      <div className="mx-5 mt-4">
        <div className="d-flex">
          <div>
            <img
              src={currentUserData.userImg}
              alt=""
              width="150px"
              height="150px"
              className="rounded-circle me-3 single-user-img"
            />
          </div>
          <div className="d-flex flex-column align-items-start ms-3 mt-1">
            <div className="fs-3">{currentUserData.userName}</div>
            <div className="mt-3 d-flex justify-content-center">
              <div className="fs-5">
                {currentUserData.posts && currentUserData.posts.length} Post
              </div>
              <div className="ms-4 fs-5">
                {currentUserData.friendsId && currentUserData.friendsId.length}{" "}
                Friends
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3">
          {allPosts.status ? (
            <div className="row">
              {currentUserData.posts.map((val, key) => {
                return (
                  <div className="col-4 mt-4 position-relative" key={key}>
                    <img
                      src={val.postImg}
                      alt=""
                      width="100%"
                      height="100%"
                      className="object-fit-cover cursor-pointer post-image"
                      onClick={() =>
                        setAllPosts({
                          status: false,
                          postImg: val.postImg,
                          postTitle: val.postTitle,
                          postLike: val.postLike,
                          postFire: val.postFire,
                        })
                      }
                    />
                    <div className="position-absolute d-flex like-fire-details">
                      <div className="d-flex align-items-center like-details">
                        <div className="fs-5">{val.postLike}</div>
                        <IoHeartOutline className="fs-3" />
                      </div>
                      <div className="ms-2 d-flex align-items-center">
                        <div className="fs-5">{val.postFire}</div>
                        <AiOutlineFire className="fs-3" />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          ) : (
            <div>
              <div
                onClick={() => setAllPosts({ status: true })}
                className="cursor-pointer"
              >
                Back
              </div>
              <div>
                <img src={allPosts.postImg} alt="" width="80%" />
                <div>{allPosts.postTitle}</div>
                <div>{allPosts.postLike}</div>
                <div>{allPosts.postFire}</div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserAccount;
