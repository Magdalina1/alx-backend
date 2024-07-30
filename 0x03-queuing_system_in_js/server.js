import express from 'express';

const app = express();
const port = 1245;

app.get('/available_seats', (req, res) => {
  res.json({ "numberOfAvailableSeats": "50" });
});

app.listen(port, () => {
  console.log(`Server is running on http://localhost:${port}`);
});
