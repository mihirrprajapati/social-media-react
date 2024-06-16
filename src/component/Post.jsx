import { useContext, useEffect, useState } from "react";
import SinglePost from "./SinglePost/SinglePost";
import Story from "./Story";
import { MyContext } from "../context/ContextProvider";

const Post = () => {
  const { currentUserData, dataArr } = useContext(MyContext);

  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    if (
      currentUserData.friendsId &&
      currentUserData.friendsId.length > 0 &&
      dataArr.length > 0
    ) {
      const filtered = dataArr
        .filter((user) => currentUserData.friendsId.includes(user.userId))
        .flatMap((user) => user.posts);
      setFilteredPosts(filtered);
    }
  }, [currentUserData.friendsId, dataArr]);

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
          {currentUserData.posts &&
            currentUserData.posts.map((val, key) => {
              return <SinglePost key={key} data={val} />;
            })}
          {filteredPosts.map((val, key) => {
            return <SinglePost key={key} data={val} />;
          })}
        </div>
      </div>
    </>
  );
};

export default Post;
