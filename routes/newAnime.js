const { Router } = require('express');
const fetch = require('node-fetch');
const { flattenArray } = require('../helpers/flatten');
const router = Router();
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
  req.routeName = 'newanime';
  res.status(200).json({
    status: 'success',
    data: flattenArray(result),
  });
});

module.exports = router;
