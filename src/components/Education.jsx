import React from 'react';
import './Education.css';

const Education = ({ data }) => {
  return (
    <section className="education">
      <h2 className="section-title">Học vấn</h2>
      <div className="education-list">
        {data.map((edu, index) => (
          <div key={index} className="education-item">
            <div className="education-header">
              <h3 className="degree">{edu.degree}</h3>
              <div className="institution">{edu.institution}</div>
              <div className="education-period">{edu.startDate} - {edu.endDate}</div>
            </div>
            {edu.description && (
              <p className="education-description">{edu.description}</p>
            )}
            {edu.gpa && (
              <div className="gpa">GPA: {edu.gpa}</div>
            )}
            {edu.achievements && (
              <ul className="education-achievements">
                {edu.achievements.map((achievement, idx) => (
                  <li key={idx}>{achievement}</li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;