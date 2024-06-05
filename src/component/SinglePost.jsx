import "./SinglePost.css";

const SinglePost = () => {
  return (
    <>
      <div className="d-flex my-3 single-post-box">
        <div className="post-img-box d-flex rounded-4">
          <img
            src="https://cdn.pixabay.com/photo/2018/02/21/08/40/woman-3169726_1280.jpg"
            alt=""
            className="post-img rounded-4 img-fluid"
          />
        </div>
        <div className="p-4">
          <div>
            <div className="post-date">
              May <br /> 08
            </div>
            <div></div>
          </div>
          <div>Lorem ipsum dolor sit.</div>
          <div></div>
        </div>
      </div>
    </>
  );
};

export default SinglePost;
