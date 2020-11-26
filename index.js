import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import anime from './routes/anime.js';
import trendingAnime from './routes/trendingAnime.js';
import newAnime from './routes/newAnime.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import cache from './middleware/cache.js';
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
dotenv.config();
app.get('/', (req, res) =>
  res.send(
    `<h1> so the app doesn't crash whenever we navigate to the index</h1>`
  )
);
app.use('/api/anime', cache, anime);
app.use('/api/trendinganime', cache, trendingAnime);
app.use('/api/newanime', cache, newAnime);
// chore, switch this around
const port = 5000 || process.env.PORT;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
