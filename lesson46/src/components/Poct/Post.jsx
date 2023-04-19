import React from 'react';
import style from './Post.module.css';

function Post (props) { 
  return (
   
        <div className={style.wrapperPost}>
          {/* <img className={style.img} >{props.img}</img> */}
          <h2 className={style.title}>{props.title}</h2> 
          <span className={style.poct}>{props.post}</span>
        </div>
  
);
}

function PostItem() {

let postData = [
    {
        id: 1,
        // img: url = "./",
        title: 'Welcome to react-admin demo',
        post: 'aaaaasaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa'
    }
]
    let postElements = postData.map(a => < Post title={a.title} post={a.post}  />);


  return (
    <div className={style.wrapperItem}>
      {postElements}                    
    </div>
  );
}

export default PostItem;