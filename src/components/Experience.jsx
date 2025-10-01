import React from 'react';
import './Experience.css';

const Experience = ({ data }) => {
  return (
    <section className="experience">
      <h2 className="section-title">Kinh nghiệm làm việc</h2>
      <div className="timeline">
        {data.map((job, index) => (
          <div key={index} className="timeline-item">
            <div className="timeline-marker"></div>
            <div className="timeline-content">
              <div className="job-header">
                <h3 className="job-title">{job.position}</h3>
                <div className="job-company">{job.company}</div>
                <div className="job-period">{job.startDate} - {job.endDate || 'Hiện tại'}</div>
              </div>
              <p className="job-description">{job.description}</p>
              {job.achievements && (
                <ul className="job-achievements">
                  {job.achievements.map((achievement, idx) => (
                    <li key={idx}>{achievement}</li>
                  ))}
                </ul>
              )}
              {job.technologies && (
                <div className="job-technologies">
                  {job.technologies.map((tech, idx) => (
                    <span key={idx} className="tech-tag">{tech}</span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;