import React, { useState } from 'react';
import { contactAPI } from '../services/api';
import './Contact.css';

const Contact = ({ data }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState(null); // 'success', 'error', or null

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus(null);

    try {
      const response = await contactAPI.sendMessage(formData);
      
      if (response.success) {
        setSubmitStatus('success');
        setFormData({ name: '', email: '', message: '' });
        
        // Show success message for 5 seconds
        setTimeout(() => {
          setSubmitStatus(null);
        }, 5000);
      }
    } catch (error) {
      console.error('Contact form error:', error);
      setSubmitStatus('error');
      
      // Hide error message after 5 seconds
      setTimeout(() => {
        setSubmitStatus(null);
      }, 5000);
    } finally {
      setIsSubmitting(false);
    }
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
          
          {/* Status Messages */}
          {submitStatus === 'success' && (
            <div className="alert alert-success">
              ✅ Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi bạn sớm nhất có thể.
            </div>
          )}
          
          {submitStatus === 'error' && (
            <div className="alert alert-error">
              ❌ Có lỗi xảy ra khi gửi tin nhắn. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua email.
            </div>
          )}
          
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
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
                disabled={isSubmitting}
              ></textarea>
            </div>
            <button 
              type="submit" 
              className={`submit-btn ${isSubmitting ? 'submitting' : ''}`}
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                <>
                  <span className="spinner"></span>
                  Đang gửi...
                </>
              ) : (
                'Gửi tin nhắn'
              )}
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;