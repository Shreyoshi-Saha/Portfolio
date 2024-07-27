import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';
import { config } from 'dotenv';

// Load environment variables
config();

const app = express();
app.use(cors());
app.use(express.json());

const contactEmail = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});

contactEmail.verify((error) => {
  if (error) {
    console.log('Error setting up email transporter:', error);
  } else {
    console.log('Email transporter is ready to send emails.');
  }
});

app.post('/contact', (req, res) => {
  const { firstName, lastName, email, phone, message } = req.body;
  const mail = {
    from: `${firstName} ${lastName} <${email}>`,
    to: process.env.EMAIL_USER,
    subject: 'Contact Form Submission - Portfolio',
    html: `<p>Name: ${firstName} ${lastName}</p>
           <p>Email: ${email}</p>
           <p>Phone: ${phone}</p>
           <p>Message: ${message}</p>`,
  };
  contactEmail.sendMail(mail, (error) => {
    if (error) {
      console.log('Error sending email:', error);
      res.json({ code: 500, status: 'Failed to send message' });
    } else {
      console.log('Email sent successfully');
      res.json({ code: 200, status: 'Message Sent' });
    }
  });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server Running on port ${PORT}`));
