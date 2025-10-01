import React, { useState } from 'react';
import './Contact.css';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Xử lý gửi form ở đây
    console.log('Form submitted:', formData);
    alert('Cảm ơn bạn đã liên hệ! Tôi sẽ phản hồi sớm nhất có thể.');
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section className="contact">
      <h2 className="section-title">Liên hệ</h2>
      <div className="contact-content">
        <div className="contact-info">
          <h3>Thông tin liên hệ</h3>
          <div className="contact-details">
            <div className="contact-item">
              <span className="icon">📧</span>
              <div>
                <strong>Email:</strong>
                <a href={`mailto:${data.email}`}>{data.email}</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon">📱</span>
              <div>
                <strong>Điện thoại:</strong>
                <a href={`tel:${data.phone}`}>{data.phone}</a>
              </div>
            </div>
            <div className="contact-item">
              <span className="icon">📍</span>
              <div>
                <strong>Địa chỉ:</strong>
                <span>{data.address}</span>
              </div>
            </div>
          </div>
          {data.social && (
            <div className="social-links">
              <h4>Mạng xã hội</h4>
              <div className="social-list">
                {data.social.map((social, index) => (
                  <a 
                    key={index} 
                    href={social.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="social-link"
                  >
                    <span>{social.platform}</span>
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
        
        <div className="contact-form">
          <h3>Gửi tin nhắn</h3>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <label htmlFor="name">Họ tên:</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email:</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Tin nhắn:</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                rows="5"
                required
              ></textarea>
            </div>
            <button type="submit" className="submit-btn">
              Gửi tin nhắn
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;