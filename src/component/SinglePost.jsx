import { useState } from "react";
import "./SinglePost.css";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeartSharp } from "react-icons/io5";
import { AiFillFire } from "react-icons/ai";
import { AiOutlineFire } from "react-icons/ai";

const SinglePost = () => {
  const [like, setLike] = useState({
    likeCount: 0,
    isLiked: false,
  });
  const [fire, setFire] = useState({
    fireCount: 0,
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

  return (
    <>
      <div className="d-flex my-3 single-post-box row">
        <div className="post-img-box p-0 d-flex rounded-4 col-6">
          <img
            src="https://cdn.pixabay.com/photo/2018/02/21/08/40/woman-3169726_1280.jpg"
            alt=""
            className="w-100 rounded-4 img-fluid"
          />
        </div>
        <div className="d-flex flex-column justify-content-between p-4 col-6">
          <div>
            <div className="d-flex">
              <div className="post-date me-2">
                May <br /> 08
              </div>
              <div className="d-flex flex-column justify-content-around">
                <div className="fs-5">Lorem ipsum dolor sit amet.</div>
                <div>Thurs 10:00 pm</div>
              </div>
            </div>
            <div className="mt-3">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit.
              Voluptatum, quisquam.
            </div>
            <hr />
            <div className="d-flex align-items-center">
              <img
                src="https://cdn.pixabay.com/photo/2016/03/23/04/01/woman-1274056_1280.jpg"
                alt=""
                width="35px"
                height="35px"
                className="rounded-circle me-3"
              />
              <div className="fw-400">Alice fdffdgfdg</div>
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
