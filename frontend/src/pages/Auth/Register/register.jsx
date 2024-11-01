import React, { useState } from 'react';
import './register.css';
import { Link, useNavigate } from 'react-router-dom';

const Register = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    const userData = {
      firstname,
      lastname,
      email,
      phoneNumber,
      password,
    };

    try {
      const response = await fetch('http://localhost:8001/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(userData),
      });

      if (response.ok) {
        alert('Đăng ký thành công!');
        navigate('/login'); // Redirect to login page
      } else {
        const errorData = await response.json();
        const errorMessages = {};

        if (errorData.errors) {
          errorData.errors.forEach(error => {
            errorMessages[error.param] = error.msg; // Map errors to field names
          });
        } else {
          errorMessages.global = errorData.message || 'Đã xảy ra lỗi.';
        }
        setErrors(errorMessages); // Set errors for display
      }
    } catch (error) {
      console.error('Lỗi:', error);
      setErrors({ global: 'Đã xảy ra lỗi, vui lòng kiểm tra kết nối internet.' });
    }
  };

  return (
    <div className="register-container">
      <h1 className="register-title">Đăng Ký</h1>
      {errors.global && <span className="error-message global-error">{errors.global}</span>}
      <form onSubmit={handleSubmit} >
        <div className="register-input-group">
          <div className="register-input-field">
            <label>Tên</label>
            <input
              type="text"
              className="register-input"
              value={firstname}
              onChange={(e) => setFirstname(e.target.value)}
              required
            />
            {errors.firstname && <span className="error-message">{errors.firstname}</span>}
          </div>
          <div className="register-input-field">
            <label>Họ</label>
            <input
              type="text"
              className="register-input"
              value={lastname}
              onChange={(e) => setLastname(e.target.value)}
              required
            />
            {errors.lastname && <span className="error-message">{errors.lastname}</span>}
          </div>
        </div>
        <div className="register-input-group">
          <label>Email</label>
          <input
            type="email"
            className="register-input"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && <span className="error-message">{errors.email}</span>}
        </div>
        <div className="register-input-group">
          <label>Số điện thoại</label>
          <input
            type="text"
            className="register-input"
            value={phoneNumber}
            onChange={(e) => setPhoneNumber(e.target.value)}
            required
          />
          {errors.phoneNumber && <span className="error-message">{errors.phoneNumber}</span>}
        </div>
        <div className="register-input-group">
          <label>Mật khẩu</label>
          <input
            type="password"
            className="register-input"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          {errors.password && <span className="error-message">{errors.password}</span>}
        </div>
        <div className="register-links">
          <a href="/" className="register-link">Quên mật khẩu?</a>
          <Link to="/login" className="register-link">Login</Link>
        </div>
        <button type="submit" className="register-button">Đăng Ký</button>
      </form>
      <div className="register-divider">Hoặc</div>
      <div className="register-social-buttons">
        <button className="social-button facebook">Facebook</button>
        <button className="social-button google">Google</button>
      </div>
    </div>
  );
}

export default Register;
