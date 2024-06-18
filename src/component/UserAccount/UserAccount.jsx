import { useContext, useState } from "react";
import { MyContext } from "../../context/ContextProvider";
import { IoHeartOutline } from "react-icons/io5";
import { AiOutlineFire } from "react-icons/ai";
import { IoMdArrowRoundBack } from "react-icons/io";
import "./UserAccount.css";

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
                className="cursor-pointer ms-5 back-arrow"
              >
                <IoMdArrowRoundBack className="fs-3" />
              </div>
              <div className="d-flex flex-column align-items-center">
                <img src={allPosts.postImg} alt="" width="70%" />
                <div className="w-100 d-flex justify-content-around mt-3">
                  <div className="fs-4">{allPosts.postTitle}</div>
                  <div className="d-flex align-items-center">
                    <div className="d-flex align-items-center fs-5 me-3">
                      <IoHeartOutline /> <div>{allPosts.postLike}</div>
                    </div>
                    <div className="d-flex align-items-center fs-5">
                      <AiOutlineFire /> <div>{allPosts.postFire}</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default UserAccount;
