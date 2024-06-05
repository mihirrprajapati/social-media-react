import SinglePost from "./SinglePost";
import Story from "./Story";

const Post = () => {
  return (
    <>
      <div className="p-5">
        <div>
          <Story />
        </div>
        <div className="d-flex flex-column align-items-center mt-5">
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
