import express from 'express';
import nodemailer from 'nodemailer';
import rateLimit from 'express-rate-limit';

const router = express.Router();

// Rate limiting cho contact form
const contactLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 3, // Chỉ cho phép 3 email trong 15 phút
  message: {
    error: 'Too many contact attempts',
    message: 'Bạn đã gửi quá nhiều tin nhắn. Vui lòng thử lại sau 15 phút.'
  }
});

// Configure nodemailer
const createTransporter = () => {
  if (process.env.EMAIL_SERVICE === 'gmail') {
    return nodemailer.createTransporter({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS // App password, not regular password
      }
    });
  } else {
    return nodemailer.createTransporter({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT || 587,
      secure: false,
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });
  }
};

// POST /api/contact - Send contact form email
router.post('/', contactLimiter, async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        error: 'Missing required fields',
        message: 'Vui lòng điền đầy đủ thông tin: họ tên, email và tin nhắn.'
      });
    }

    // Email validation regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        error: 'Invalid email',
        message: 'Email không hợp lệ.'
      });
    }

    // Create transporter
    const transporter = createTransporter();

    // Email to CV owner
    const mailOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: process.env.EMAIL_TO || 'khaihh.goog@gmail.com',
      subject: `📧 CV Contact Form - Tin nhắn từ ${name}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c3e50; border-bottom: 2px solid #3498db; padding-bottom: 10px;">
            💼 Tin nhắn mới từ CV Website
          </h2>
          
          <div style="background-color: #f8f9fa; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <p><strong>👤 Họ tên:</strong> ${name}</p>
            <p><strong>📧 Email:</strong> ${email}</p>
            <p><strong>📅 Thời gian:</strong> ${new Date().toLocaleString('vi-VN')}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #dee2e6; border-radius: 8px;">
            <h3 style="color: #495057; margin-top: 0;">💬 Nội dung tin nhắn:</h3>
            <p style="line-height: 1.6; color: #333;">${message.replace(/\n/g, '<br>')}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #e8f5e8; border-radius: 8px;">
            <p style="margin: 0; color: #155724; font-size: 14px;">
              ✅ Email này được gửi tự động từ CV website của bạn.
            </p>
          </div>
        </div>
      `
    };

    // Auto-reply to sender
    const autoReplyOptions = {
      from: process.env.EMAIL_FROM || process.env.EMAIL_USER,
      to: email,
      subject: '✅ Đã nhận được tin nhắn của bạn - Hồ Hữu Khải',
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2c3e50;">Xin chào ${name}!</h2>
          
          <p>Cảm ơn bạn đã liên hệ qua CV website của tôi. Tôi đã nhận được tin nhắn của bạn:</p>
          
          <div style="background-color: #f8f9fa; padding: 15px; border-radius: 8px; margin: 15px 0;">
            <p style="font-style: italic; color: #6c757d;">"${message}"</p>
          </div>
          
          <p>Tôi sẽ phản hồi bạn trong thời gian sớm nhất có thể.</p>
          
          <div style="margin-top: 30px; padding: 20px; background-color: #e3f2fd; border-radius: 8px;">
            <p style="margin: 0;"><strong>📧 Email:</strong> khaihh.goog@gmail.com</p>
            <p style="margin: 5px 0 0 0;"><strong>📱 Phone:</strong> 0342471218</p>
          </div>
          
          <p style="margin-top: 20px;">Trân trọng,<br><strong>Hồ Hữu Khải</strong></p>
        </div>
      `
    };

    // Send emails
    await transporter.sendMail(mailOptions);
    await transporter.sendMail(autoReplyOptions);

    res.json({
      success: true,
      message: 'Tin nhắn đã được gửi thành công! Tôi sẽ phản hồi bạn sớm nhất có thể.'
    });

  } catch (error) {
    console.error('Contact form error:', error);
    res.status(500).json({
      error: 'Email sending failed',
      message: 'Có lỗi xảy ra khi gửi email. Vui lòng thử lại sau hoặc liên hệ trực tiếp qua email.'
    });
  }
});

export default router;