import { useContext, useEffect, useState } from "react";
import "./SinglePost.css";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { AiFillFire } from "react-icons/ai";
import { AiOutlineFire } from "react-icons/ai";
import { MyContext } from "../../context/ContextProvider";

const SinglePost = ({ data }) => {
  const { dataArr } = useContext(MyContext);

  const [userDetails, setUserDetails] = useState([]);

  const [like, setLike] = useState({
    likeCount: data.postLike,
    isLiked: false,
  });
  const [fire, setFire] = useState({
    fireCount: data.postFire,
    isFire: false,
  });

  const likeClicked = () => {
    setLike({
      ...like,
      likeCount: like.isLiked ? like.likeCount - 1 : like.likeCount + 1,
      isLiked: !like.isLiked,
    });
  };

  const smileClicked = () => {
    setFire({
      ...fire,
      fireCount: fire.isFire ? fire.fireCount - 1 : fire.fireCount + 1,
      isFire: !fire.isFire,
    });
  };

  useEffect(() => {
    const user = dataArr.filter((val) => val.userId === data.userId);
    setUserDetails(...user);
  }, [userDetails]);

  return (
    <>
      <div className="d-flex my-3 single-post-box row">
        <div className="post-img-box p-0 d-flex rounded-4 col-6">
          <img
            src={data.postImg}
            alt=""
            className="w-100 rounded-4 img-fluid post-img"
          />
        </div>
        <div className="d-flex flex-column justify-content-between p-4 col-6">
          <div>
            <div className="d-flex">
              <div className="post-date me-2">
                May <br /> 08
              </div>
              <div className="d-flex flex-column justify-content-around">
                <div className="fs-5">{data.postTitle}</div>
                <div>Thurs 10:00 pm</div>
              </div>
            </div>
            <div className="mt-3">{data.postDesc}</div>
            <hr />
            <div className="d-flex align-items-center">
              <img
                src={userDetails.userImg && userDetails.userImg}
                alt=""
                width="35px"
                height="35px"
                className="rounded-circle me-3 post-img"
              />
              <div className="fw-400">
                {userDetails.userName && userDetails.userName}
              </div>
            </div>
          </div>
          <div className="d-flex mt-2 align-items-center justify-content-end">
            <div className="cursor-pointer d-flex align-items-center">
              {like.isLiked ? (
                <IoHeartSharp
                  className="fs-4 text-danger"
                  onClick={likeClicked}
                />
              ) : (
                <IoHeartOutline className="fs-4" onClick={likeClicked} />
              )}
              <span className="ms-1">{like.likeCount}</span>
            </div>

            <div className="ms-2 cursor-pointer d-flex align-items-center">
              {fire.isFire ? (
                <AiFillFire
                  className="fs-4 text-warning"
                  onClick={smileClicked}
                />
              ) : (
                <AiOutlineFire className="fs-4" onClick={smileClicked} />
              )}
              <span className="ms-1">{fire.fireCount}</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
