import express from 'express';
import fetch from 'node-fetch';
import { flattenArray } from '../helpers/flatten.js';
import client from '../helpers/redisClient.js';
import routeNames from '../helpers/routenames.js';
const router = express.Router();
router.get('/', async (req, res) => {
  let result;
  try {
    const data = await fetch(`${process.env.BASEURL}/trending/anime`);
    result = await data.json();
  } catch (error) {
    throw new Error('no data was returned');
  }
  result = result.data.filter((el) =>
    /^2017|^2018|^2019/.test(el.attributes.startDate)
  );
  client.setex(routeNames.newAnime, 3600, JSON.stringify(flattenArray(result)));
  res.status(200).json({
    status: 'success',
    data: flattenArray(result),
  });
});

export default router;
