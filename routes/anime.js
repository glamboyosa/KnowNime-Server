import express from 'express';
import fetch from 'node-fetch';
import { flattenArray, flattenObject } from '../helpers/flatten.js';
import routeNames from '../helpers/routenames.js';
import client from '../helpers/redisClient.js';

const router = express.Router();
router.get('/', async (req, res) => {
  let result;
  try {
    const data = await fetch(`${process.env.BASEURL}/anime`);
    result = await data.json();
  } catch (error) {
    throw new Error('no data was returned');
  }
  client.setex(
    routeNames.anime,
    3600,
    JSON.stringify(flattenArray(result.data))
  );
  res.status(200).json({
    status: 'success',
    data: flattenArray(result.data),
  });
});
router.get('/:id', async (req, res) => {
  const { id } = req.params;
  let result;
  try {
    const data = await fetch(`${process.env.BASEURL}/anime/${id}`);
    result = await data.json();
  } catch (error) {
    throw new Error('no data was returned');
  }
  res.status(200).json({
    status: 'success',
    data: flattenObject(result.data),
  });
});
export default router;
