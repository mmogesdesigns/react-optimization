import React, { useMemo } from "react";

const PostList = ({ posts, selectedUserId }) => {
  const filteredPosts = useMemo(() => {
    return posts.filter((post) => post.userId === selectedUserId);
  }, [posts, selectedUserId]);

  return (
    <div>
      {filteredPosts.map((post) => (
        <div key={post.id}>
          <h3>{post.title}</h3>
          <p>{post.body}</p>
        </div>
      ))}
    </div>
  );
};

export default PostList;
