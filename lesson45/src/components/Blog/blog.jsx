import React from 'react';
import './blog.css';

function Blog() {
    return (
      <div className ="App-blog">
            <div className="App-blog-left">
                <span>Blog</span>
                <div className='App-blog-item'></div>
                <div className='App-blog-item'></div>
                <div className='App-blog-item'></div>
                <div className='App-blog-item'></div>
            </div>
            <div className='App-blog-right'>
                <span>New</span>
                <div className='App-blog-right-item'></div>
                <div className='App-blog-right-item'></div>
                <div className='App-blog-right-item'></div>
            </div>
    </div>
  );
}

export default Blog;