import React from 'react';


const Header = props => {
    return (
      <header id="welcome-section">
        <div className="forest" />
        <div className="silhouette" />
        <div className="moon" />
        <div className="container">
          <h1>
            <span className="line">Welcome </span>
            <span className="line"></span>
            <span className="line">
              <span className="color">to</span>The Vegan Kart.
            </span>
          </h1>
        </div>
      </header>
    );
  };
  
  

export default Header;
