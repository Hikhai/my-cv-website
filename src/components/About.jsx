import React from 'react';
import './About.css';

const About = ({ data }) => {
  return (
    <section className="about">
      <h2 className="section-title">Giới thiệu</h2>
      <div className="about-content">
        <p className="about-text">{data.description}</p>
        <div className="highlights">
          {data.highlights?.map((highlight, index) => (
            <div key={index} className="highlight-item">
              <span className="highlight-icon">✓</span>
              <span>{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;