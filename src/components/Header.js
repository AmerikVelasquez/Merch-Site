import React from 'react';
import headerImg from './../img/headerPhoto.jpg';

function Header() {
  return (
    <React.Fragment>
      <h1>Mercher</h1>
      <img src={headerImg} alt="an image of stock"/>
    </React.Fragment>
    
  );
}

export default Header;
