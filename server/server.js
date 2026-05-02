const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const app = express()
const port = 5501;  

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/feedbackdb')
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('Error connecting to MongoDB:', error);
  });

const feedbackSchema = new mongoose.Schema({
  "name": String,
  "feedback": String  
})

const Feedback = mongoose.model('Feedback', feedbackSchema);

app.post('/feedback', async (req, res) => {
  try {
    const { name, feedback } = req.body;

    if (!name || !feedback) {
      return res.status(400).json({ inputError: 'Both Name and feedback are required' });
    }

    const newFeedback = new Feedback({ name, feedback });
    await newFeedback.save();
    return res.status(201).json({ message: 'Feedback submitted successfully!' });

  } catch (error) {

    console.error('Error submitting feedback:', error);
    return res.status(500).json({ error: 'Error submitting feedback' });

  }
});

app.get('/feedback', async (req, res) => {
  try {

    const feedbackList = await Feedback.find();
    return res.status(200).json({ list: feedbackList });

  } catch (error) {

    console.error('Error fetching feedback:', error);
    return res.status(500).json({ error: 'Error fetching feedback' });

  }
});

app.listen(port, () => {
  console.log(`Feedback form listening on port ${port}`);
});
