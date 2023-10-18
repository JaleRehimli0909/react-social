import React from 'react';
import './style.css';
import Share from '../Share';
import Post from '../Post';

const Feed = () => {
  return (
    <div className='Feed'>
      <div className='feedWrapper'>
       <Share/>
       <Post/>
       <Post/>
       <Post/>
      
      </div>
    </div>
  )
}

export default Feed;