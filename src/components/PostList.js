import { useState } from 'react';
import Post from './Post';
import { useNavigate } from 'react-router-dom';

const DEFAULT_PAGE_SIZE = 20;
const PostList = ({posts, loading, error, onPostClick}) => {
   const [searchedValue, setSearchedValue] = useState("");
   const [currentPage, setCurrentPage] = useState(1);
   const navigate = useNavigate();

    if(loading) return <p>Loading...</p>;
    if(error) return <p>Error loading posts.</p>

    const handleSearch = (e) => {
      const value = e.target.value;
      setSearchedValue(value);
    }

    let filterPosts = posts.filter((post) => {
      return post.title.includes(searchedValue) || post.body.includes(searchedValue);
    })
    const totalPage = Math.ceil(filterPosts.length/DEFAULT_PAGE_SIZE);
    filterPosts = filterPosts.slice((currentPage-1)*DEFAULT_PAGE_SIZE, currentPage*DEFAULT_PAGE_SIZE);
    
    return (
        <div>
          
          <input type='text' value={searchedValue} onChange={handleSearch} placeholder='Enter text to search'></input>
            {filterPosts.map(post => (
        <Post key={post.id} post={post} onClick={() => {
          onPostClick(post);
          navigate('/post-detail');
        }}/>
        ))}
        <button onClick={() => setCurrentPage(currentPage-1)} disabled={currentPage === 1} className='prev-button'>Previous Page</button>
        <button onClick={() => setCurrentPage(currentPage+1)} disabled={currentPage === totalPage || totalPage === 0}>Next Page</button>
        </div>
    )
}

export default PostList;