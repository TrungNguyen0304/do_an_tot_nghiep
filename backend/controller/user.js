const bcrypt = require('bcrypt');
const {  validationResult } = require('express-validator');
const User = require('../models/user'); // Path to your User model

exports.register = [

  
  // Handler
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { email, password, firstname, lastname, phoneNumber } = req.body;

    try {
      const existingUser = await User.findOne({ email });
      if (existingUser) {
        return res.status(400).json({ errors: [{ param: 'email', msg: 'Email đã tồn tại.' }] });
      }

      const hashedPassword = await bcrypt.hash(password, 10);
      const user = new User({
        email,
        password: hashedPassword,
        firstname,
        lastname,
        phoneNumber,
        role: 'user',
      });

      await user.save();
      
      res.status(201).json({ message: 'Đăng ký thành công!' });
    } catch (error) {
      console.error(error);
      res.status(500).json({ errors: [{ param: 'global', msg: 'Đã xảy ra lỗi, vui lòng thử lại.' }] });
    }
  },
];
