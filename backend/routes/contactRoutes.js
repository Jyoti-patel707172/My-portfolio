import express from 'express';
import Contact from '../models/Contact.js';
import nodemailer from 'nodemailer';
import dotenv from 'dotenv';

// 🚨 Load environment variables in this file too
dotenv.config();

const router = express.Router();

// Debug: Check if env variables are loaded
console.log('📧 Email User:', process.env.EMAIL_USER);
console.log('🔑 Email Pass Exists:', !!process.env.EMAIL_PASS);

// Configure nodemailer
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

// Verify transporter configuration
transporter.verify(function (error, success) {
  if (error) {
    console.log('❌ Email transporter error:', error);
  } else {
    console.log('✅ Email server is ready to send messages');
  }
});

// Contact form submission
router.post('/', async (req, res) => {
  try {
    const { name, email, message } = req.body;

    // Validate required fields
    if (!name || !email || !message) {
      return res.status(400).json({ 
        success: false, 
        message: 'All fields are required' 
      });
    }

    // Save to database
    const newContact = new Contact({ name, email, message });
    await newContact.save();

    console.log("📩 Email sending via:", process.env.EMAIL_USER);

    // Send email notification
    const mailOptions = {
      from: process.env.EMAIL_USER,
      replyTo: email,
      to: process.env.EMAIL_USER, // Or your personal email
      subject: `New Contact Form Submission from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
        <hr>
        <p>This message was sent from your portfolio website contact form.</p>
      `
    };

    await transporter.sendMail(mailOptions);
    console.log('✅ Email sent successfully');

    res.status(200).json({ 
      success: true, 
      message: 'Message sent successfully!' 
    });

  } catch (error) {
    console.error('❌ Error sending message:', error);
    res.status(500).json({ 
      success: false, 
      message: 'Error sending message. Please try again.' 
    });
  }
});

export default router;