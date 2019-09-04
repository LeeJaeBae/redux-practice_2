import React from "react";

const Post = ({ location, match }) => {
  console.log("Post:", match);
  const { id } = match.params;
  return <p>Post #{id}</p>;
};

export default Post;
