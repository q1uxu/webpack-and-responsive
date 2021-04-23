import React, { useState } from 'react';

const App = () => {
  return (
    <section className="container">
      <aside className="aside">
        <div className="logo-container">
          <i className="logo"></i>
          <span className="logo-name">Test.</span>
          <i className="burger"></i>
          <i className="logo logo2"></i>
        </div>
        <nav className="menu-container">
          <div className="menu active">
            <i className="menu-icon home"></i>
            <span className="menu-name">标题1</span>
          </div>
          <div className="menu">
            <i className="menu-icon personal"></i>
            <span className="menu-name">标题2</span>
          </div>
          <div className="menu">
            <i className="menu-icon team"></i>
            <span className="menu-name">标题3</span>
          </div>
          <div className="divider"></div>
          <div className="menu">
            <i className="menu-icon news"></i>
            <span className="menu-name">标题4</span>
          </div>
          <div className="menu">
            <i className="menu-icon setting"></i>
            <span className="menu-name">标题5</span>
          </div>
        </nav>
      </aside>
      <main className="main">
        <header className="header">
          <div className="search-container">
            <i className="search-icon"></i>
            <input className="search" type="search" placeholder="Search.."/>
          </div>
          <span className="avatar"></span>
        </header>
        <h2 className="title">所有视频</h2>
        <div className="video-container">
          {[1, 2, 3, 4, 5].map(item => (
            <div className="video" key={item}>
              <div className="video-content"></div>
              <div className="video-name">演示视频{item}</div>
              <div className="video-time">{item}秒以前</div>
            </div>
          ))}
        </div>
      </main>
    </section>
  ) 
}

export default App;
