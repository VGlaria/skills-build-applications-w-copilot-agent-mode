import express from 'express';
import cors from 'cors';
import db from './config/database.js';

const app = express();
const port = Number(process.env.PORT || 8000);

app.use(cors());
app.use(express.json());

app.get('/health', (_req, res) => {
  res.json({ status: 'ok' });
});

app.get('/', (_req, res) => {
  res.json({ message: 'OctoFit Tracker backend running' });
});

app.listen(port, () => {
  console.log(`OctoFit backend listening on port ${port}`);
});
