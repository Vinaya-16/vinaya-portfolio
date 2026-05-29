import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import Message from './models/Message.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  credentials: true
}));

app.use(express.json());

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true
})
.then(() => {

  console.log('MongoDB Connected');

  // Start server only after DB connects
  app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
  });

})
.catch((err) => {
  console.error('MongoDB Connection Error:', err);
});

// Routes
app.get('/', (req, res) => {
  res.send('Backend Running Successfully');
});

// Save Contact Message
app.post('/contact', async (req, res) => {

  try {

    console.log('Incoming Data:', req.body);

    const { name, email, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        message: 'All fields are required'
      });
    }

    // Create new document
    const newMessage = new Message({
      name,
      email,
      message
    });

    // Save to MongoDB
    const savedMessage = await newMessage.save();

    console.log('Saved Message:', savedMessage);

    res.status(200).json({
      message: 'Message saved successfully'
    });

  } catch (error) {

    console.error('SAVE ERROR:', error);

    res.status(500).json({
      message: error.message
    });
  }
});

// Get All Messages
app.get('/messages', async (req, res) => {

  try {

    const messages = await Message.find();

    res.status(200).json(messages);

  } catch (error) {

    console.error('FETCH ERROR:', error);

    res.status(500).json({
      message: error.message
    });
  }
});