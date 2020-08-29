const express = require('express');
const morgan = require('morgan');
const { config } = require('dotenv');
const anime = require('./routes/anime');
const trendingAnime = require('./routes/trendingAnime');
const newAnime = require('./routes/newAnime');
const cors = require('cors');
const bodyParser = require('body-parser');
const cache = require('./middleware/cache');
const app = express();
app.use(cors());
app.use(bodyParser.json());
app.use(morgan('dev'));
config();

app.use('/api/anime', cache, anime);
app.use('/api/trendinganime', cache, trendingAnime);
app.use('/api/newanime', cache, newAnime);
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
