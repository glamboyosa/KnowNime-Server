import express from 'express';
import morgan from 'morgan';
import { config } from 'dotenv';
const app = express();
config();
app.use(morgan('dev'));
const port = process.env.PORT || 5000;
app.listen(port, () => {
  console.log(`listening on port ${port}`);
});
