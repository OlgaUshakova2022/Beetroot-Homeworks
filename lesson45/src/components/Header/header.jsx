import React from 'react';
import './header.css';

function Header() {
  return (
    <div className="App-header">
          <div className='app-header-wrapper'>
              <div className='App-header-leftBloc'></div>
              <span className='App-header-span'>Blog name</span>
              <nav className='App-header-nav'>
                  <div className='App-header-nav-item'></div>
                  <div className='App-header-nav-item'></div>
                  <div className='App-header-nav-item'></div>
                  <div className='App-header-nav-item'></div>
                  <div className='App-header-nav-item'></div>
              </nav>
    </div>
    </div>
  );
}

export default Header;