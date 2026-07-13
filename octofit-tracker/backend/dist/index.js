import express from 'express';
import cors from 'cors';
import { connectDatabase } from './config/database.js';
import { apiBaseUrl } from './config/api.js';
import dataRouter from './routes/data.js';
const app = express();
const port = Number(process.env.PORT || 8000);
app.use(cors());
app.use(express.json());
app.get('/health', (_req, res) => {
    res.json({ status: 'ok' });
});
app.get('/', (_req, res) => {
    res.json({ message: 'OctoFit Tracker backend running', apiBaseUrl });
});
app.use('/api', dataRouter);
async function startServer() {
    await connectDatabase();
    app.listen(port, () => {
        console.log(`OctoFit backend listening on port ${port}`);
        console.log(`API base URL: ${apiBaseUrl}`);
    });
}
startServer();
