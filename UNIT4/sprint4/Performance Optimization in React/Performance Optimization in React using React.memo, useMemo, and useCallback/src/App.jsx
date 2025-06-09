import React, { useEffect, useState, useCallback } from "react";
import Post from "./Post";

let postId = 1;

const App = () => {
  const [timer, setTimer] = useState(0);
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const [posts, setPosts] = useState([]);

  // Timer logic
  useEffect(() => {
    const interval = setInterval(() => setTimer(prev => prev + 1), 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAddPost = () => {
    const newPost = {
      id: postId++,
      title,
      body,
    };
    setPosts([...posts, newPost]);
    setTitle("");
    setBody("");
  };

  // Memoize toggle function so it doesn't cause re-renders
  const toggleVerify = useCallback((id) => {
    setPosts(prev =>
      prev.map(post =>
        post.id === id ? { ...post, verifyPost: !post.verifyPost } : post
      )
    );
  }, []);

  return (
    <div>
      <h2>⏱ Timer: {timer}s</h2>
      <input
        type="text"
        placeholder="Title"
        value={title}
        onChange={e => setTitle(e.target.value)}
      />
      <br />
      <input
        type="text"
        placeholder="Body"
        value={body}
        onChange={e => setBody(e.target.value)}
      />
      <br />
      <button onClick={handleAddPost}>Add Post</button>

      <div style={{ marginTop: "20px" }}>
        {posts.map(post => (
          <Post key={post.id} post={post} toggleVerify={toggleVerify} />
        ))}
      </div>
    </div>
  );
};

export default App;
