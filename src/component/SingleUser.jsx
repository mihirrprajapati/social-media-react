const SingleUser = ({ userName, userImg }) => {
  return (
    <>
      <div className="my-4 d-flex align-items-center justify-content-between">
        <div className="d-flex align-items-center">
          <img
            src={userImg}
            alt=""
            width="50px"
            height="50px"
            className="rounded-circle me-3 single-user-img"
          />
          <div className="fw-500">{userName}</div>
        </div>
      </div>
    </>
  );
};

export default SingleUser;
