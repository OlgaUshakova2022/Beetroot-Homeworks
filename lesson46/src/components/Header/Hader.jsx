import React from 'react';
import style from './Header.module.css';

function Header () {
  return (
      <div className={style.header}>
          <div className={style.span}>logo</div>
          <span className={style.span}>Posters Galore</span>
          <div>
              <a href="https://lms.beetroot.academy/myCourses/lesson/cl9pawmyy39wc07273sotqwcu">
                  <img src="./image/linkedin(1).svg"></img>
             </a>
             <a href="https://lms.beetroot.academy/myCourses/lesson/cl9pawmyy39wc07273sotqwcu">
                  <img src="./image/linkedin(1).svg"></img>
             </a>
          </div>
    </div>
  );
}

export default Header;