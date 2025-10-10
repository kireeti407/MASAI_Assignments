import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPosts } from './postsSlice';
import './App.css';

function App() {
  const dispatch = useDispatch();
  const posts = useSelector((state) => state.posts.posts);
  const status = useSelector((state) => state.posts.status);
  const error = useSelector((state) => state.posts.error);

  useEffect(() => {
    if (status === 'idle') {
      dispatch(fetchPosts());
    }
  }, [status, dispatch]);

  return (
    <div className="App">
      <h1>Redux Toolkit Data Fetch</h1>
      {status === 'loading' && <div>Loading...</div>}
      {status === 'failed' && <div>{error}</div>}
      {status === 'succeeded' && (
        <div>
          {posts.map((post) => (
            <div key={post.id}>
              <h2>{post.title}</h2>
              <p>{post.body}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default App;