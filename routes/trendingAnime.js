const { Router } = require('express');
const fetch = require('node-fetch');
const { flattenArray, flattenObject } = require('../helpers/flatten');
const router = Router();
router.get('/', async (req, res) => {
  let result;
  try {
    const data = await fetch(`${process.env.BASEURL}/trending/anime`);
    result = await data.json();
  } catch (error) {
    throw new Error('no data was returned');
  }
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
module.exports = router;
