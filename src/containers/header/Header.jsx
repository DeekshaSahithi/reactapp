import React from 'react';
import bannerhome from '../../asserts/bannerhome.png';
import './header.css';

const Header = () => (
  <div className="gpt3__header section__padding" id="home">
    <div className="gpt3__header-content">
      <h1 className="gradient__text">Finvesta LLC</h1>
      <p>Finvesta offers an Integrated Data, Management for Invest Data.
          Integrate, organize, and manage your data from a single source of unified data.</p>

      <div className="gpt3__header-content__input">
        <input type="email" placeholder="Your Email Address" />
        <button type="button">Get Started</button>
      </div>
    </div>

    <div className="gpt3__header-image">
   <img src={bannerhome}></img>
    </div>
  </div>
);

export default Header;
