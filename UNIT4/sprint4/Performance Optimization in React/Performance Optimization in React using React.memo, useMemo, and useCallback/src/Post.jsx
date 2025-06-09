import React, { useMemo } from "react";

const Post = ({ post, toggleVerify }) => {
  // Memoize background color
  const backgroundColor = useMemo(() => {
    const color = `hsl(${Math.floor(Math.random() * 360)}, 70%, 85%)`;
    console.log(`Color generated for post ${post.id}:`, color);
    return color;
  }, [post.id]);

  console.log("Rendering Post ID:", post.id);

  return (
    <div
      style={{
        backgroundColor,
        padding: "10px",
        marginBottom: "10px",
        borderRadius: "8px",
      }}
    >
      <h3>{post.title}</h3>
      <p>{post.body}</p>
      <p>Status: {post.verifyPost ? "Verified" : "Not Verified"}</p>
      <button onClick={() => toggleVerify(post.id)}>
        {post.verifyPost ? "Unverify" : "Verify"}
      </button>
    </div>
  );
};

export default React.memo(Post);
