import SinglePost from "./SinglePost/SinglePost";
import Story from "./Story";

const Post = () => {
  return (
    <>
      <div className="px-5 py-3">
        <div style={{ height: "11vh" }}>
          <Story />
        </div>
        <div
          className="d-flex flex-column align-items-center mt-4"
          style={{ height: "76vh", overflow: "scroll" }}
        >
          <SinglePost />
          <SinglePost />
          <SinglePost />
          <SinglePost />
        </div>
      </div>
    </>
  );
};

export default Post;
