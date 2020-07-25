import express from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
import anime from './routes/anime';
import cors from 'cors';
import bodyParser from 'body-parser';
const app = express();
app.use(cors());
app.use(bodyParser.json());
config();
const REDIS_PORT = process.env.port || 6379;
export const client = redis.createClient(REDIS_PORT);
app.use('/api/anime', anime);
app.use(morgan('dev'));
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
