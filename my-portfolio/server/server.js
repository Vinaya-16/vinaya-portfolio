import express from 'express';
import cors from 'cors';
import mongoose from 'mongoose';
import dotenv from 'dotenv';

import Message from './models/Message.js';

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

mongoose.connect(process.env.MONGO_URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.log(err));

app.post('/contact', async (req, res) => {

  try {

    const newMessage = new Message(req.body);

    await newMessage.save();

    res.json({
      message: 'Message saved successfully'
    });

  } catch (error) {

    res.status(500).json({
      message: 'Error saving message'
    });
  }
});

app.get('/messages', async (req, res) => {

  const messages = await Message.find();

  res.json(messages);
});

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});