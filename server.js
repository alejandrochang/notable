const express = require("express");
const app = express();
const port = process.env.PORT || 5000;

app.listen(port, () => console.log(`Listening on port ${port}`));

const physicians = [
  { id: 1, name: 'Hibbert, Julius' },
  { id: 2, name: 'Krieger, Algernop' },
  { id: 3, name: 'Riviera, Nick' },
];

const appointments = [
  { id: 1, name: 'Sterling Archer 1', time: '8:00AM', type: 'New Patient' },
  { id: 1, name: 'Cyril Figis 1', time: '8:30AM', type: 'Follow up' },
  { id: 1, name: 'Ray Gilette 1', time: '9:00AM', type: 'Follow up' },
  { id: 1, name: 'Lana Kane 1', time: '9:30AM', type: 'New Patient' },
  { id: 1, name: 'Pam Poovey 1', time: '10:00AM', type: 'New Patient' },
  { id: 2, name: 'Sterling Archer 2', time: '8:00AM', type: 'New Patient' },
  { id: 2, name: 'Cyril Figis 2', time: '8:30AM', type: 'Follow up' },
  { id: 2, name: 'Ray Gilette 2', time: '9:00AM', type: 'Follow up' },
  { id: 2, name: 'Lana Kane 2', time: '9:30AM', type: 'New Patient' },
  { id: 2, name: 'Pam Poovey 2', time: '10:00AM', type: 'New Patient' },
  { id: 3, name: 'Sterling Archer 3', time: '8:00AM', type: 'New Patient' },
  { id: 3, name: 'Cyril Figis 3', time: '8:30AM', type: 'Follow up' },
  { id: 3, name: 'Ray Gilette 3', time: '9:00AM', type: 'Follow up' },
  { id: 3, name: 'Lana Kane 3', time: '9:30AM', type: 'New Patient' },
  { id: 3, name: 'Pam Poovey 3', time: '10:00AM', type: 'New Patient' },
];

// GET physicians
app.get("/physicians", (req, res) => {
  res.send({ express: physicians });
});

// GET an appointment
app.get("/appointments", (req, res) => {
  console.log({ req, res })
  res.send({ express: appointments });
});
