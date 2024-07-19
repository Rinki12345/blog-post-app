
import './App.css';
import { useState, useEffect } from 'react';
import {BrowserRouter, Route, Routes, Link} from 'react-router-dom';
import Header from './components/Header';
import PostList from './components/PostList';
import PostDetail from './components/PostDetail';
import CreatePost from './components/CreatePost';
import { fetchPosts } from './services/api';


const App = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);
  

  const handlePostClick = (post) => {
    setSelectedPost(post);
    
  };

  const handlePostCreated = (post) => {
    setPosts([post, ...posts]);
  };

  useEffect(() => {
    fetchPosts()
      .then(data => {
        setPosts(data);
        setLoading(false);
      })
      .catch(err => {
        setError(err);
        setLoading(false);
      });
  }, []);

  return (
    <BrowserRouter>
      <div>
        <Header />
        <Link to='/new-post'>Creat New Post</Link>
        <Routes>
          <Route path='/' element={ <PostList onPostClick={handlePostClick} posts={posts} loading={loading} error={error} />}></Route>
          <Route path='/new-post' element={<CreatePost onPostCreated={handlePostCreated}></CreatePost>}></Route>
          <Route path='/post-detail' element={<PostDetail post={selectedPost} />}></Route>
        </Routes>
        
        
      </div>
    </BrowserRouter>
    
  );
};

export default App;
