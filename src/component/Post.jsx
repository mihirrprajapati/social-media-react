import SinglePost from "./SinglePost";
import Story from "./Story";

const Post = () => {
  return (
    <>
      <div className="px-5 py-3">
        <div>
          <Story />
        </div>
        <div className="d-flex flex-column align-items-center mt-3">
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
