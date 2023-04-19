import React from 'react';
import style from './Navbar.module.css';
import NavbarItem from './NavbarItem/NavbarItem';
import BlockItem from '../BlockItem/BlockItem';

function Navbar () {
  return (
    <div className={style.wraper}>
      <div className={style.navbar}>
          <NavbarItem name= 'Dashoard' img src={require("./NavbarItem/svg/Ellipse6.svg")} ></NavbarItem>
          <NavbarItem name= 'Sales'/>
          <NavbarItem name= 'Catalog'/>
          <NavbarItem name= 'Gustomers'/>
          <NavbarItem name='Revews' />  
      </div>
      
      </div>
  );
}

export default Navbar;