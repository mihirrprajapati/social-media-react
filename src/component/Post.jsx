import { useContext, useEffect, useState } from "react";
import SinglePost from "./SinglePost/SinglePost";
import Story from "./Story";
import { MyContext } from "../context/ContextProvider";

const Post = () => {
  const { currentUserData, dataArr } = useContext(MyContext);

  const [friendsIdArr, setFriendsIdArr] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);

  useEffect(() => {
    if (currentUserData.friends) {
      const friendsId = currentUserData.friends.map((val) => val.userId);
      setFriendsIdArr(friendsId);
    }
    console.log(currentUserData.posts);
  }, [currentUserData]);

  useEffect(() => {
    if (friendsIdArr.length > 0 && dataArr.length > 0) {
      const filtered = dataArr
        .filter((user) => friendsIdArr.includes(user.userId))
        .flatMap((user) => user.posts);

      setFilteredPosts(filtered);
    }
  }, [friendsIdArr, dataArr]);

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
