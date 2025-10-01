import React from 'react';
import './Header.css';

const Header = ({ data }) => {
  return (
    <header className="header">
      <div className="header-content">
        <div className="profile-image">
          <img src={data.profileImage || '/default-avatar.png'} alt="Profile" />
        </div>
        <div className="header-info">
          <h1 className="name">{data.name}</h1>
          <h2 className="title">{data.title}</h2>
          <p className="summary">{data.summary}</p>
          <div className="contact-info">
            <div className="contact-item">
              <span className="icon">📧</span>
              <span className='email text'>{data.email}</span>
            </div>
            <div className="contact-item">
              <span className="icon">📱</span>
              <span className='phone text'>{data.phone}</span>
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <span className='location text'>{data.location}</span>
            </div>
            {data.website && (
              <div className="contact-item">
                <span className="icon">🌐</span>
                <a className='website text' href={data.website} target="_blank" rel="noopener noreferrer">
                  {data.website}
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;