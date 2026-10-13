import express from 'express';
// TypeScript seamlessly resolves this relative file import
import listRouter from './routes/list'; 

const app = express();
const port = Number(process.env.PORT ?? 3000);

app.use(express.json());
app.get('/health', (_req, res) => {
  res.status(200).json({ status: 'ok' });
});

app.use('/list', listRouter);

//app.listen(3000, () => console.log('🚀 Server spinning up on port 3000'));
app.listen(port, '0.0.0.0', () => {
  console.log(`🚀 Server spinning up on port ${port}`);
});