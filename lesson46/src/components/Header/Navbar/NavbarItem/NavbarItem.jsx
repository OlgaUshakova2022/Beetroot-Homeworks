import React from 'react';
import style from './NavbarItem.module.css';

function NavbarItem (props) {
  return (
      <div className={style.navbarItem}>
          <a className={style.navbarItemLogo} href="https://lms.beetroot.academy/myCourses/lesson/cl9pawmyy39wc07273sotqwcu">
              <img src= {props.img} alt="photo" />
          </a>
          
          <a className={style.navbarItemTitle} href="https://lms.beetroot.academy/myCourses/lesson/cl9pawmyy39wc07273sotqwcu">
              {props.name}
          </a>          
        
    </div>
  );
}

export default NavbarItem;