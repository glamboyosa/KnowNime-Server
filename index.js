const express = require('express');
const morgan = require('morgan');
const { config } = require('dotenv');
const anime = require('./routes/anime');
const trendingAnime = require('./routes/trendingAnime');
const newAnime = require('./routes/newAnime');
const cors = require('cors');
const bodyParser = require('body-parser');
const redis = require('redis');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
config();
const REDIS_PORT = process.env.port || 6379;
// will throw an error if Redis isn't running
//exports.client = redis.createClient(REDIS_PORT);
app.use('/api/anime', anime);
app.use('/api/trendinganime', trendingAnime);
app.use('/api/newanime', newAnime);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
